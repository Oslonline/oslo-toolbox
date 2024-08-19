import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import imageCompression from "browser-image-compression";
import { saveAs } from "file-saver";
import { IoCloudUploadOutline } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

export default function Images() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputFormat, setOutputFormat] = useState("png");
  const [errorMessage, setErrorMessage] = useState("");
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
      const formats = ["jpg", "png", "gif", "bmp", "svg", "webp"];
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
        };
        img.src = event.target.result;
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (selectedFile) return;
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please drop a valid image file.");
      setSelectedFile(null);
    }
  };

  const handleSelectAnotherFile = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <Helmet>
        <title>Images converter - Convert any image file</title>
        <meta name="description" content="Convert any image file easily into various formats with our free online converter." />
        <meta name="keywords" content="image converter, free image conversion, jpeg, png, gif" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/FilesConvert/Images" />
      </Helmet>

      <div className="flex flex-col gap-4 p-4 md:p-6">
        <p className="text-gray-500">Convert any image for free with our images converter. Insert your file, select the desired converted format, click convert, and it's done!</p>

        <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6">
          <div className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <div className="flex w-full items-center justify-center gap-2">
              {!selectedFile ? (
                <div className="w-full">
                  <div onClick={triggerFileInput} className="flex w-full cursor-pointer flex-col items-center justify-center rounded-md bg-orange-400 p-4 text-center text-white duration-200 hover:bg-orange-600">
                    <IoCloudUploadOutline className="text-9xl" />
                    <p className="text-lg">Drag here or click to import your image</p>
                    <p className="mt-2 text-center text-xs">SVG, PNG, JPG, WEBP, BMP or GIF (MAX. 20MB).</p>
                  </div>
                  <input id="file-input" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </div>
              ) : (
                <div className="flex w-full flex-col items-center gap-6 lg:gap-2">
                  <div className="w-full items-start">
                    <button onClick={handleSelectAnotherFile} className="flex items-center gap-2 rounded-md border-2 border-gray-200 px-2 py-1 duration-200 hover:bg-gray-200">
                      <VscDebugRestart />
                      Select another file
                    </button>
                  </div>
                  <div className="flex w-fit flex-col gap-2">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="flex items-center gap-1 text-gray-900 md:text-lg">
                          File selected: <span className="text-base text-gray-600">{selectedFile.name}</span>
                        </p>
                        <p className="flex items-center gap-1 text-gray-900 md:text-lg">
                          Size:
                          <span className="text-base text-gray-600">{selectedFile.size < 1024 * 1024 ? `${(selectedFile.size / 1024).toFixed(2)} KB` : `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`}</span>
                        </p>
                      </div>
                      <FaArrowRight className="text-2xl text-gray-900 md:text-4xl" />
                      <div>
                        <select id="output-format" value={outputFormat} onChange={(e) => setOutputFormat(e.target.value)} className="rounded-md border-2 border-gray-200 bg-white p-2 focus:border-orange-400">
                          {["jpg", "png", "gif", "bmp", "svg", "webp"]
                            .filter((format) => format !== selectedFile.name.split(".").pop().toLowerCase())
                            .map((format) => (
                              <option key={format} value={format}>
                                {format.toUpperCase()}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <button onClick={handleConvert} className="rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600" disabled={isConverting}>
                      {isConverting ? (
                        <div className="flex w-full items-center justify-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                              <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                            </path>
                          </svg>
                          <p>Converting</p>
                        </div>
                      ) : (
                        <div className="flex w-full items-center justify-center gap-2">
                          <MdOutlineRocketLaunch className="text-xl" />
                          <p>
                            Convert to <span className="uppercase">{outputFormat}</span>
                          </p>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>

        <div>
          <div className="mb-4">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Why use our image converter?</h2>
            <p className="mb-4 text-gray-600">Our image converter is easy to use, free, and supports a wide range of formats. Whether you need to convert your images for a specific purpose or just to save space, we have you covered.</p>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Frequently Asked Questions</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900">What formats do you support?</h3>
            <p className="text-gray-600">We support a wide range of formats including JPEG, PNG, GIF, BMP, SVG, WEBP, and more. Simply upload your image, select the output format, and convert.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900">Is it really free?</h3>
            <p className="text-gray-600">Yes, our image converter is completely free to use with no hidden charges.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900">Can I convert multiple files at once?</h3>
            <p className="text-gray-600">Currently, our converter supports converting one file at a time. We are working on adding bulk conversion in the future.</p>
          </div>
        </div>
      </div>
    </>
  );
}
