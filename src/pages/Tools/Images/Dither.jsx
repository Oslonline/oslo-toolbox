import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { GoDownload } from "react-icons/go";
import { VscDebugRestart } from "react-icons/vsc";
import ImageUploader from "../../../components/toolspage/ImageUploader";
import FAQSection from "../../../components/Faq";
import ButtonNeutralCta from "../../../components/ui/ButtonNeutralCta";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";
import SliderInput from "../../../components/ui/SliderInput";
import { patternOptions, isErrorDiffusion, ditherImage } from "../../../utils/dithering";
import DropdownInput from "../../../components/ui/DropdownInput";

const groupedPatternOptions = [
  {
    label: "-- Error Diffusion --",
    options: patternOptions.filter((o) => [1, 3, 4, 5, 6, 7, 12, 13, 14].includes(o.value)),
  },
  {
    label: "-- Ordered Dithering --",
    options: patternOptions.filter((o) => [2, 8].includes(o.value)),
  },
  {
    label: "-- Other / Experimental --",
    options: patternOptions.filter((o) => [9, 10, 11, 15].includes(o.value)),
  },
];

// Utility: which patterns allow invert?
const invertAllowed = (pattern) =>
  [1, 3, 4, 5, 6, 7, 12, 13, 14, 2, 8, 15].includes(pattern);

export default function Dither() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pattern, setPattern] = useState(1);
  const [threshold, setThreshold] = useState(128);
  const [previewResolution, setPreviewResolution] = useState(350);
  const [invert, setInvert] = useState(false);
  const [serpentine, setSerpentine] = useState(false); // default false
  const [hasAppliedDithering, setHasAppliedDithering] = useState(false);
  const [settingsByPattern, setSettingsByPattern] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    setSettingsByPattern((prev) => ({
      ...prev,
      [pattern]: { threshold, invert, serpentine },
    }));
  }, [pattern, threshold, invert, serpentine]);

  useEffect(() => {
    if (selectedFile) {
      applyDitheringEffect();
    }
  }, [selectedFile, pattern, threshold, previewResolution, invert, serpentine]);

  const applyDitheringEffect = () => {
    const canvas = canvasRef.current;
    if (canvas && selectedFile) {
      const ctx = canvas.getContext("2d");
      const img = new window.Image();
      img.src = URL.createObjectURL(selectedFile);
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const displayWidth = Math.min(previewResolution, img.width);
        const displayHeight = displayWidth / aspectRatio;
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
        const imageData = ctx.getImageData(0, 0, displayWidth, displayHeight);
        const dithered = ditherImage({
          imageData: imageData.data,
          width: displayWidth,
          height: displayHeight,
          pattern,
          threshold,
          invert,
          serpentine,
        });
        ctx.putImageData(dithered, 0, 0);
        setHasAppliedDithering(true);
      };
      img.onerror = (err) => {
        setHasAppliedDithering(false);
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

  const handlePatternChange = (e) => {
    const newPattern = Number(e.target.value);
    setPattern(newPattern);
    // Restore settings for this pattern if available
    const s = settingsByPattern[newPattern] || {};
    setThreshold(s.threshold ?? 128);
    setInvert(s.invert ?? false);
    setSerpentine(s.serpentine ?? false); // always default to false if not set
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

  const handleInvertChange = (e) => {
    setInvert(e.target.checked);
    setHasAppliedDithering(true);
  };

  const handleSerpentineChange = (e) => {
    setSerpentine(e.target.checked);
    setTimeout(applyDitheringEffect, 0);
    setHasAppliedDithering(true);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setHasAppliedDithering(false);
    setPattern(1);
    setThreshold(128);
    setPreviewResolution(350);
    setInvert(false);
    setSerpentine(false); // always false
    setSettingsByPattern({});
  };

  const thresholdDisabled = pattern === 2 || pattern === 8;
  const serpentineDisabled = !isErrorDiffusion(pattern);
  const invertDisabled = !invertAllowed(pattern);

  const disabledStyle = (disabled) => (disabled ? "cursor-not-allowed opacity-50" : "");

  return (
    <>
      <Helmet>
        <title>Dither Image | Oslo Toolbox</title>
        <meta name="description" content="Add a dither/bitmap effect to your image easily for free using the Floyd Steinberg algorithm and more. Insert your file, select the desired final effect resolution, click download and get your dithered image." />
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
                  {/* Custom dropdown with optgroup style */}
                  <label htmlFor="pattern-select" className="mb-1 text-xs font-semibold">
                    Algorithm
                  </label>
                  <select id="pattern-select" className="rounded border bg-white px-2 py-1 font-mono text-sm text-black dark:bg-neutral-900 dark:text-white" value={pattern} onChange={handlePatternChange}>
                    {groupedPatternOptions.map((group) => [
                      <option key={group.label} value="" disabled style={{ fontWeight: "bold", color: "#888" }}>
                        {group.label}
                      </option>,
                      ...group.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      )),
                    ])}
                  </select>
                  <SliderInput id="threshold-input" label="Threshold" min={20} max={180} value={threshold} onChange={handleThresholdChange} disabled={thresholdDisabled} className={disabledStyle(thresholdDisabled)} />
                  <SliderInput id="preview-resolution" label="Resolution" min={50} max={1000} value={previewResolution} onChange={handleResolutionChange} valueSuffix=" px" />
                  <div className={`mt-2 flex items-center gap-2 ${disabledStyle(invertDisabled)}`}>
                    <input
                      id="invert-output"
                      type="checkbox"
                      checked={invert}
                      onChange={handleInvertChange}
                      disabled={invertDisabled}
                    />
                    <label htmlFor="invert-output" className="text-xs">
                      Invert Output
                    </label>
                  </div>
                  <div className={`mt-2 flex items-center gap-2 ${disabledStyle(serpentineDisabled)}`}>
                    <input id="serpentine-scan" type="checkbox" checked={serpentine} onChange={handleSerpentineChange} disabled={serpentineDisabled} />
                    <label htmlFor="serpentine-scan" className="text-xs">
                      Serpentine Scanning
                    </label>
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
