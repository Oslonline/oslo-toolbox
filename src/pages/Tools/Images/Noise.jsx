import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { GoDownload } from "react-icons/go";
import { VscDebugRestart } from "react-icons/vsc";
import ImageUploader from "../../../components/toolspage/ImageUploader";
import FAQSection from "../../../components/Faq";
import ButtonNeutralCta from "../../../components/ui/ButtonNeutralCta";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";
import SliderInput from "../../../components/ui/SliderInput";

export default function Noise() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [noiseAmount, setNoiseAmount] = useState(50);
  const [previewResolution, setPreviewResolution] = useState(350);
  const [noiseStrength, setNoiseStrength] = useState(50);
  const [hasAppliedNoise, setHasAppliedNoise] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (selectedFile) {
      applyNoiseEffect();
    }
  }, [selectedFile]);

  const applyNoiseEffect = () => {
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

        for (let i = 0; i < data.length; i += 4) {
          const noise = (Math.random() - 0.5) * noiseAmount * (noiseStrength / 100);
          const grayNoise = noise;
          data[i] += grayNoise;
          data[i + 1] += grayNoise;
          data[i + 2] += grayNoise;
        }

        ctx.putImageData(imageData, 0, 0);
        setHasAppliedNoise(true);
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
      link.download = "noise-effect.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    }
  };

  const handleNoiseAmountChange = (e) => {
    setNoiseAmount(Number(e.target.value));
    setTimeout(applyNoiseEffect, 0);
    setHasAppliedNoise(true);
  };

  const handleResolutionChange = (e) => {
    setPreviewResolution(Number(e.target.value));
    setTimeout(applyNoiseEffect, 0);
    setHasAppliedNoise(true);
  };

  const handleNoiseStrengthChange = (e) => {
    setNoiseStrength(Number(e.target.value));
    setTimeout(applyNoiseEffect, 0);
    setHasAppliedNoise(true);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setHasAppliedNoise(false);
    setNoiseAmount(50);
    setPreviewResolution(350);
    setNoiseStrength(50);
  };

  return (
    <>
      <Helmet>
        <title>Add Noise to Image | Oslo Toolbox</title>
        <meta name="description" content="Add a noise effect to your image easily for free. Insert your file, select the desired noise amount & strength, click download and get your image." />
        <meta name="keywords" content="noise effect, free noise effect, jpg, png, webp, bmp, svg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Images/Noise" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base md:p6 flex w-full flex-col rounded-lg border-2 p-4">
        {selectedFile ? (
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <div className="flex h-auto w-full flex-col gap-4">
              <div className="flex flex-col items-center gap-2 md:flex-row md:items-end md:gap-4">
                <span className="border-border-light dark:border-border-dark flex max-w-4/5 justify-center rounded-md border p-2 md:max-w-1/3 lg:justify-start">
                  <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="h-auto" />
                </span>
                <div className="flex w-full flex-col gap-1">
                  <SliderInput id="noise-amount-input" label="Noise Amount" min={0} max={100} value={noiseAmount} onChange={handleNoiseAmountChange} />
                  <SliderInput id="noise-strength-input" label="Noise Strength" min={0} max={100} value={noiseStrength} onChange={handleNoiseStrengthChange} />
                  <SliderInput id="preview-resolution" label="Resolution" min={50} max={1000} value={previewResolution} onChange={handleResolutionChange} valueSuffix=" px" />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <ButtonNeutralCta className="flex items-center justify-center gap-2" onClick={handleReset}>
                  <VscDebugRestart /> Select a different image
                </ButtonNeutralCta>
                <ButtonMainCta className="flex items-center justify-center gap-2" onClick={downloadImage} disabled={!hasAppliedNoise}>
                  <GoDownload className="md:stroke-1" /> Save result as PNG
                </ButtonMainCta>
              </div>
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
