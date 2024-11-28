import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import imageCompression from "browser-image-compression";
import { saveAs } from "file-saver";
import { IoCloudUploadOutline } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import FAQSection from "../../../components/commons/Faq";

export default function Images() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputFormat, setOutputFormat] = useState("png");
  const [errorMessage, setErrorMessage] = useState("");
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
      const formats = ["jpg", "png", "bmp", "svg", "webp"];
      const suggestedFormat = formats.find((format) => format !== fileExtension);
      setOutputFormat(suggestedFormat);
    }
  }, [selectedFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please select a valid image file.");
      setSelectedFile(null);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-input").click();
  };

  const handleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    try {
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: 0.6,
      };

      const compressedFile = await imageCompression(selectedFile, options);
      const convertedBlob = await convertImageFormat(compressedFile, outputFormat);
      const newFileName = selectedFile.name.replace(/\.[^/.]+$/, "") + `.${outputFormat}`;
      saveAs(convertedBlob, newFileName);

      setIsConverting(false);
    } catch (error) {
      console.error("Error during conversion:", error);
      setErrorMessage("An error occurred during conversion. Please try again.");
      setIsConverting(false);
    }
  };

  const convertImageFormat = (file, format) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          if (format === "svg") {
            const svgData = `
              <svg xmlns="http://www.w3.org/2000/svg" width="${img.width}" height="${img.height}">
                <image href="${event.target.result}" width="${img.width}" height="${img.height}" />
              </svg>`;
            const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
            resolve(svgBlob);
          } else {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const outputMimeType = format === "jpg" ? "image/jpeg" : `image/${format}`;
            const quality = format === "png" ? undefined : 0.7;

            canvas.toBlob(
              (blob) => {
                if (blob) {
                  resolve(blob);
                } else {
                  reject(new Error("Conversion failed"));
                }
              },
              outputMimeType,
              quality,
            );
          }
        };
        img.src = event.target.result;
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const faqData = [
    {
      question: "What formats do you support?",
      answer: "We support a wide range of formats including JPEG, PNG, BMP, SVG, WEBP, and more. Simply upload your image, select the output format, and convert.",
    },
    {
      question: "Is it really free?",
      answer: "Yes, our image converter is completely free to use with no hidden charges.",
    },
    {
      question: "Can I convert multiple files at once?",
      answer: "Currently, our converter supports converting one file at a time. We are working on adding bulk conversion in the future.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Images converter - Convert any image file</title>
        <meta name="description" content="Convert any image file easily into various formats with our free online converter." />
        <meta name="keywords" content="image converter, free image conversion, jpg, png, webp, bmp, svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/FilesConvert/Images" />
      </Helmet>

      <div className="flex flex-col gap-4 p-4 md:p-6">
        <p className="text-gray-600 dark:text-gray-400">Convert any image for free with our images converter. Insert your file, select the desired converted format, click convert, and it's done!</p>

        <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
          <div className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex w-full items-center justify-center gap-2">
              {!selectedFile ? (
                <div className="w-full">
                  <div onClick={triggerFileInput} className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md bg-orange-400 p-4 text-center text-white duration-200 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400">
                    <IoCloudUploadOutline className="text-9xl" />
                    <p className="text-lg">Drag here or click to import your image</p>
                    <p className="mt-2 text-center text-xs">SVG, PNG, JPG, WEBP, or BMP (MAX. 20MB).</p>
                  </div>
                  <input id="file-input" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </div>
              ) : (
                <div className="flex w-full flex-col items-center gap-6 lg:gap-2">
                  <div className="w-full items-start">
                    <button onClick={() => setSelectedFile(null)} className="flex items-center gap-2 rounded-md border-2 border-gray-200 px-2 py-1 duration-200 hover:bg-gray-200 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
                      <VscDebugRestart />
                      Select another file
                    </button>
                  </div>
                  <div className="flex w-fit flex-col gap-2">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="flex items-center gap-1 text-gray-900 md:text-lg dark:text-gray-100">
                          File selected: <span className="text-base text-gray-600 dark:text-gray-400">{selectedFile.name}</span>
                        </p>
                        <p className="flex items-center gap-1 text-gray-900 md:text-lg dark:text-gray-100">
                          Size:
                          <span className="text-base text-gray-600 dark:text-gray-400">{selectedFile.size < 1024 * 1024 ? `${(selectedFile.size / 1024).toFixed(2)} KB` : `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`}</span>
                        </p>
                      </div>
                      <FaArrowRight className="text-2xl text-gray-900 md:text-4xl dark:text-gray-100" />
                      <div>
                        <p className="text-base text-gray-600 dark:text-gray-400">Output format</p>
                        <select onChange={(e) => setOutputFormat(e.target.value)} value={outputFormat} className="border-2 bg-white p-2 text-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
                          <option value="png">PNG</option>
                          <option value="jpg">JPG</option>
                          <option value="bmp">BMP</option>
                          <option value="webp">WEBP</option>
                          <option value="svg">SVG</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={handleConvert} disabled={isConverting} className="flex items-center gap-2 rounded-md bg-orange-400 p-3 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400">
                        <MdOutlineRocketLaunch />
                        {isConverting ? "Converting..." : "Convert now"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <FAQSection faqs={faqData} />
      </div>
    </>
  );
}
