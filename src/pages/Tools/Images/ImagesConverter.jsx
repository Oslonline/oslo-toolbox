import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { saveAs } from "file-saver";
import imageCompression from "browser-image-compression";
import { VscDebugRestart } from "react-icons/vsc";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { GoDownload } from "react-icons/go";
import { CgRemove } from "react-icons/cg";
import JSZip from "jszip";
import FAQSection from "../../../components/Faq";
import ImageUploader from "../../../components/toolspage/ImageUploader";
import ButtonNeutralCta from "../../../components/ui/ButtonNeutralCta";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";

export default function Images() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [outputFormats, setOutputFormats] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      const newOutputFormats = {};
      selectedFiles.forEach((file) => {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        newOutputFormats[file.name] = fileExtension === "png" ? "jpg" : "png";
      });
      setOutputFormats(newOutputFormats);
    }
  }, [selectedFiles]);

  const handleFileChange = (files) => {
    if (files.length + selectedFiles.length > 5) {
      setErrorMessage("You can upload up to 5 files only.");
      return;
    }
    const validFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
    if (validFiles.length !== files.length) {
      setErrorMessage("Please select valid image files.");
      return;
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...validFiles]);
    setErrorMessage("");
  };

  const handleDeleteFile = (index) => {
    const fileToDelete = selectedFiles[index];
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setConvertedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setOutputFormats((prevFormats) => {
      const newFormats = { ...prevFormats };
      delete newFormats[fileToDelete.name];
      return newFormats;
    });
  };

  const handleFormatChange = (fileName, format) => {
    setOutputFormats((prevFormats) => ({
      ...prevFormats,
      [fileName]: format,
    }));
  };

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return;

    setIsConverting(true);
    setConvertedFiles([]);
    setProgress(0);
    const zip = new JSZip();

    try {
      const startTime = Date.now();
      for (const file of selectedFiles) {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          initialQuality: 0.6,
        };

        const compressedFile = await imageCompression(file, options);
        const format = outputFormats[file.name];
        const convertedBlob = await convertImageFormat(compressedFile, format);
        const newFileName = file.name.replace(/\.[^/.]+$/, "") + `.${format}`;
        setConvertedFiles((prevFiles) => [...prevFiles, { name: newFileName, blob: convertedBlob }]);
        zip.file(newFileName, convertedBlob);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      setConvertedFiles((prevFiles) => [...prevFiles, { name: "all_images.zip", blob: zipBlob }]);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => {
        setIsConverting(false);
      }, remainingTime);

      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, remainingTime / 100);
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

  return (
    <>
      <Helmet>
        <title>Images converter - Convert any image file</title>
        <meta name="description" content="Convert any image file easily into various formats with our free online converter." />
        <meta name="keywords" content="image converter, free image conversion, jpg, png, webp, bmp, svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/FilesConvert/Images" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col rounded-lg border-2 p-4 md:p-6">
        {selectedFiles.length > 0 ? (
          <>
            {isConverting ? (
              <div className="flex flex-col items-center gap-4">
                <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="bg-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Converting images, please wait...</p>
              </div>
            ) : (
              <div className="flex w-full flex-col items-center gap-4">
                {!isConverting && convertedFiles.length === 0 && (
                  <div className="w-full">
                    <ButtonNeutralCta onClick={() => document.getElementById("file-input").click()} className="flex items-center gap-2">
                      <FiPlus />
                      Add more images
                    </ButtonNeutralCta>
                    <hr className="border-border-light dark:border-border-dark mt-4 w-full" />
                  </div>
                )}
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex w-full items-center justify-between">
                    <div>
                      <p className="flex items-center gap-1 md:text-lg">
                        File selected : <span className="text-text-border-light dark:text-text-border-dark text-base">{file.name}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      {convertedFiles.find((convertedFile) => convertedFile.name === file.name.replace(/\.[^/.]+$/, "") + `.${outputFormats[file.name]}`) ? (
                        <ButtonMainCta
                          onClick={() => saveAs(convertedFiles.find((convertedFile) => convertedFile.name === file.name.replace(/\.[^/.]+$/, "") + `.${outputFormats[file.name]}`).blob, file.name.replace(/\.[^/.]+$/, "") + `.${outputFormats[file.name]}`)}
                          className="flex items-center gap-2 py-1"
                        >
                          <GoDownload />
                          Download
                        </ButtonMainCta>
                      ) : (
                        <>
                          <p className="text-base text-gray-600 dark:text-gray-400">Output format</p>
                          <select
                            onChange={(e) => handleFormatChange(file.name, e.target.value)}
                            value={outputFormats[file.name]}
                            className="bg-accent dark:text-dark text-text-dark hover:bg-button-hover dark:hover:bg-button-dark-hover rounded-lg border-2 border-transparent px-4 py-1.5 font-mono duration-150 hover:cursor-pointer"
                          >
                            <option value="png">PNG</option>
                            <option value="jpg">JPG</option>
                            <option value="bmp">BMP</option>
                            <option value="webp">WEBP</option>
                            <option value="svg">SVG</option>
                          </select>
                        </>
                      )}
                      <button title="Remove" onClick={() => handleDeleteFile(index)} className="dark:text-text-border-light dark:hover:text-border-light text-text-border-dark hover:text-border-dark text-lg duration-150 hover:cursor-pointer md:text-xl lg:text-2xl">
                        <CgRemove />
                      </button>
                    </div>
                  </div>
                ))}
                <input id="file-input" type="file" multiple onChange={(e) => handleFileChange(e.target.files)} className="hidden" />
              </div>
            )}
            {convertedFiles.length > 0 && !isConverting && (
              <>
                <hr className="border-border-light dark:border-border-dark my-4" />
                <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
                  <ButtonNeutralCta
                    onClick={() => {
                      setSelectedFiles([]);
                      setConvertedFiles([]);
                    }}
                    className="flex items-center gap-2"
                  >
                    <VscDebugRestart />
                    Convert more images
                  </ButtonNeutralCta>
                  {convertedFiles.length > 2 && (
                    <ButtonMainCta onClick={() => saveAs(convertedFiles.find((file) => file.name === "all_images.zip").blob, "all_images.zip")} className="flex items-center gap-2">
                      <GoDownload className="md:stroke-1" />
                      Download All as ZIP
                    </ButtonMainCta>
                  )}
                </div>
              </>
            )}
            {!isConverting && convertedFiles.length === 0 && (
              <ButtonMainCta onClick={handleConvert} disabled={isConverting} className="flex w-fit items-center gap-2">
                <MdOutlineRocketLaunch />
                Convert now
              </ButtonMainCta>
            )}
            {errorMessage && <p className="mt-2 text-center text-red-500">{errorMessage}</p>}
          </>
        ) : (
          <ImageUploader onFileSelect={handleFileChange} text="Drag here or click to import your images (up to 5)" multiple={true} maxSizeMB={20} />
        )}
      </div>

      <FAQSection />
    </>
  );
}
