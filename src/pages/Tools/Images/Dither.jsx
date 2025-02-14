import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import ImageUploader from "../../../components/commons/ImageUploader";
import { MdOutlineFileDownload, MdRefresh } from "react-icons/md";
import FAQSection from "../../../components/commons/Faq";

export default function Dither() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [threshold, setThreshold] = useState(128);
  const [previewResolution, setPreviewResolution] = useState(350);
  const [hasAppliedDithering, setHasAppliedDithering] = useState(false);
  const canvasRef = useRef(null);

  const applyDitheringEffect = () => {
    const canvas = canvasRef.current;
    if (canvas && selectedFile) {
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = URL.createObjectURL(selectedFile);

      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const displayWidth = Math.min(previewResolution, img.width);
        const displayHeight = displayWidth / aspectRatio;

        canvas.width = displayWidth;
        canvas.height = displayHeight;

        ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
        const imageData = ctx.getImageData(0, 0, displayWidth, displayHeight);
        const data = imageData.data;

        for (let y = 0; y < displayHeight; y++) {
          for (let x = 0; x < displayWidth; x++) {
            const pxIndex = (y * displayWidth + x) * 4;
            const brightness = (data[pxIndex] + data[pxIndex + 1] + data[pxIndex + 2]) / 3;
            const newColor = brightness < threshold ? 0 : 255;
            data[pxIndex] = newColor;
            data[pxIndex + 1] = newColor;
            data[pxIndex + 2] = newColor;
            const error = brightness - newColor;

            if (x < displayWidth - 1) {
              data[pxIndex + 4] += (error * 7) / 16;
            }
            if (y < displayHeight - 1) {
              if (x > 0) data[pxIndex + displayWidth * 4 - 4] += (error * 3) / 16;
              data[pxIndex + displayWidth * 4] += (error * 5) / 16;
              if (x < displayWidth - 1) data[pxIndex + displayWidth * 4 + 4] += (error * 1) / 16;
            }
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setHasAppliedDithering(true);
      };

      img.onerror = (err) => {
        console.error("Error loading image", err);
      };
    }
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setTimeout(applyDitheringEffect, 0);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "dithering-effect.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    }
  };

  const handleThresholdChange = (e) => {
    setThreshold(Number(e.target.value));
    setTimeout(applyDitheringEffect, 0);
    setHasAppliedDithering(true);
  };

  const handleResolutionChange = (e) => {
    setPreviewResolution(Number(e.target.value));
    setTimeout(applyDitheringEffect, 0);
    setHasAppliedDithering(true);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setHasAppliedDithering(false);
    setThreshold(128);
    setPreviewResolution(350);
  };

  const faqData = [
    {
      question: "What is the Floyd Steinberg algorithm?",
      answer: "The Floyd Steinberg algorithm is a dithering algorithm used in digital image processing to reduce the quantization error in image quantization.",
    },
    {
      question: "What is quantization?",
      answer: "Quantization is the process of reducing the number of levels of representation of a signal or image by mapping the signal or image onto a smaller number of levels.",
    },
    {
      question: "What is the difference between quantization and dithering?",
      answer: "Dithering is a type of quantization, while quantization is the process of reducing the number of levels of representation of a signal or image by mapping the signal or image onto a smaller number of levels.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <Helmet>
        <title>Dither Image | Oslo Toolbox</title>
        <meta name="description" content="Add a dither/bitmap effect to your image easily for free using the Floyd Steinberg algorithm. Insert your file, select the desired final effect resolution, click download and get your dithered image." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Images/Dither" />
      </Helmet>

      <p className="text-gray-600 dark:text-gray-400">Add a dither/bitmap effect to your image easily for free using the Floyd Steinberg algorithm. Insert your file, select the desired final effect resolution, click download and get your dithered image.</p>

      <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
        <div className="flex items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          {selectedFile ? (
            <div className="flex w-full flex-col gap-4 xl:flex-row">
              <div className="flex w-full flex-col gap-4">
                <div>
                  <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="h-auto w-52" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <label htmlFor="threshold-input" className="text-sm italic">
                      Threshold
                    </label>
                    <input className="accent-orange-400" id="threshold-input" onChange={handleThresholdChange} value={threshold} type="range" min={20} max={180} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="preview-resolution" className="text-sm italic">
                      Resolution
                    </label>
                    <input className="accent-orange-400" id="preview-resolution" onChange={handleResolutionChange} value={previewResolution} type="range" min={50} max={1000} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className={`p-x-2 flex items-center gap-1 rounded-sm bg-blue-800 px-4 py-2 font-mono text-gray-50 duration-100 hover:bg-blue-600 dark:bg-blue-900 dark:hover:bg-blue-800`} onClick={handleReset}>
                    <MdRefresh /> Choose a different image
                  </button>
                  <button
                    className={`p-x-2 flex w-full items-center gap-1 rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 md:w-fit dark:bg-orange-600 dark:hover:text-gray-200 ${!hasAppliedDithering ? "cursor-not-allowed opacity-70" : "hover:bg-orange-600 dark:hover:bg-orange-400"}`}
                    onClick={downloadImage}
                    disabled={!hasAppliedDithering}
                  >
                    <MdOutlineFileDownload /> Save as PNG
                  </button>
                </div>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">Note: The preview of the final result may vary from the downloaded image depending on your monitor resolution.</p>
              </div>
              <span className="h-full min-h-full border-gray-200 dark:border-gray-800"></span>
              <div className="box-border flex max-h-screen w-full items-center justify-center">
                <canvas ref={canvasRef} className="canvas max-h-full min-h-full w-full object-contain md:max-w-full" />
              </div>
            </div>
          ) : (
            <ImageUploader onFileSelect={handleFileSelect} />
          )}
        </div>
      </div>
      <FAQSection faqs={faqData} />
    </div>
  );
}
