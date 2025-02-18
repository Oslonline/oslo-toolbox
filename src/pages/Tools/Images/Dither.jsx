import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { GoDownload } from "react-icons/go";
import { VscDebugRestart } from "react-icons/vsc";
import ImageUploader from "../../../components/toolspage/ImageUploader";
import FAQSection from "../../../components/Faq";
import ButtonNeutralCta from "../../../components/ui/ButtonNeutralCta";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";

export default function Dither() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [threshold, setThreshold] = useState(128);
  const [previewResolution, setPreviewResolution] = useState(350);
  const [hasAppliedDithering, setHasAppliedDithering] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (selectedFile) {
      applyDitheringEffect();
    }
  }, [selectedFile]);

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

  const handleFileSelect = (files) => {
    setSelectedFile(files[0]);
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

  return (
    <>
      <Helmet>
        <title>Dither Image | Oslo Toolbox</title>
        <meta name="description" content="Add a dither/bitmap effect to your image easily for free using the Floyd Steinberg algorithm. Insert your file, select the desired final effect resolution, click download and get your dithered image." />
        <meta name="keywords" content="dithering effect, free dither effect,  jpg, png, webp, bmp, svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Images/Dither" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col rounded-lg border-2 p-4 md:p-6">
        {selectedFile ? (
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <div className="flex h-auto w-full flex-col gap-4">
              <div className="flex items-end gap-2 md:gap-4">
                <span className="border-border-light dark:border-border-dark flex max-w-2/5 justify-center rounded-md border p-2 md:max-w-1/3 lg:justify-start">
                  <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="h-auto" />
                </span>
                <div className="flex w-full flex-col gap-1">
                  <div className="flex flex-col">
                    <label htmlFor="threshold-input" className="text-sm italic">
                      Threshold
                    </label>
                    <input className="accent-accent" id="threshold-input" onChange={handleThresholdChange} value={threshold} type="range" min={20} max={180} />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="preview-resolution" className="text-sm italic">
                      Resolution
                    </label>
                    <input className="accent-accent" id="preview-resolution" onChange={handleResolutionChange} value={previewResolution} type="range" min={50} max={1000} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <ButtonNeutralCta className="flex items-center justify-center gap-2" onClick={handleReset}>
                  <VscDebugRestart /> Select a different image
                </ButtonNeutralCta>
                <ButtonMainCta className="flex items-center justify-center gap-2" onClick={downloadImage} disabled={!hasAppliedDithering}>
                  <GoDownload className="md:stroke-1" /> Save result as PNG
                </ButtonMainCta>
              </div>
              <p className="dark:text-text-border-dark text-text-border-light text-sm italic">Note: The preview of the final result may vary from the downloaded image depending on your monitor resolution.</p>
            </div>
            <div className="box-border flex max-h-full w-full items-center justify-center">
              <canvas ref={canvasRef} className="canvas max-h-full min-h-full w-full object-contain md:max-w-full" />
            </div>
          </div>
        ) : (
          <ImageUploader onFileSelect={handleFileSelect} multiple={false} />
        )}
      </div>

      <FAQSection />
    </>
  );
}
