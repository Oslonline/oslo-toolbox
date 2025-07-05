import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { GoDownload } from "react-icons/go";
import { VscDebugRestart } from "react-icons/vsc";
import ImageUploader from "../../../components/toolspage/ImageUploader";
import FAQSection from "../../../components/Faq";
import ButtonNeutralCta from "../../../components/ui/ButtonNeutralCta";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";
import SliderInput from "../../../components/ui/SliderInput";
import DropdownInput from "../../../components/ui/DropdownInput";

export default function Blur() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [blurType, setBlurType] = useState("gaussian");
  const [blurIntensity, setBlurIntensity] = useState(50);
  const [previewResolution, setPreviewResolution] = useState(350);
  const [hasAppliedBlur, setHasAppliedBlur] = useState(false);
  const [motionAngle, setMotionAngle] = useState(0);
  const [kernelSize, setKernelSize] = useState(3);
  const canvasRef = useRef(null);

  const blurTypes = [
    { name: "gaussian", label: "Gaussian Blur" },
    { name: "motion", label: "Motion Blur" },
    { name: "average", label: "Average Blur" },
    { name: "stack", label: "Stack Blur" },
    { name: "directional", label: "Directional Blur" },
  ];

  // Helper to get CSS filter string for preview
  const getCssFilter = () => {
    switch (blurType) {
      case "gaussian":
      case "average":
      case "stack":
        return `blur(${Math.max(1, blurIntensity / 15)}px)`;
      case "motion":
      case "directional":
        // No native CSS motion blur, fallback to blur
        return `blur(${Math.max(1, blurIntensity / 15)}px)`;
      default:
        return "";
    }
  };

  useEffect(() => {
    if (!selectedFile) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new window.Image();
    const url = URL.createObjectURL(selectedFile);

    img.src = url;
    img.onload = () => {
      // Calculate aspect ratio and preview size
      const aspectRatio = img.width / img.height;
      const displayWidth = Math.min(previewResolution, img.width);
      const displayHeight = displayWidth / aspectRatio;

      canvas.width = displayWidth;
      canvas.height = displayHeight;

      // For preview, use CSS filter for performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.filter = getCssFilter();
      ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
      ctx.restore();

      setHasAppliedBlur(true);
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
    };
    // eslint-disable-next-line
  }, [selectedFile, blurType, blurIntensity, previewResolution]);

  // Remove applyBlurEffect from handlers, as useEffect handles it
  const handleFileSelect = (files) => {
    setSelectedFile(files[0]);
    setHasAppliedBlur(false);
  };

  const handleBlurTypeChange = (e) => {
    setBlurType(e.target.value);
    setHasAppliedBlur(false);
  };

  const handleBlurIntensityChange = (e) => {
    setBlurIntensity(Number(e.target.value));
    setHasAppliedBlur(false);
  };

  const handlePreviewResolutionChange = (e) => {
    setPreviewResolution(Number(e.target.value));
    setHasAppliedBlur(false);
  };

  // Add handlers for new settings
  const handleMotionAngleChange = (e) => setMotionAngle(Number(e.target.value));
  const handleKernelSizeChange = (e) => setKernelSize(Number(e.target.value));

  // For download, optionally apply a more advanced blur algorithm here if needed
  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "blur-effect.png";
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setHasAppliedBlur(false);
    setBlurType("gaussian");
    setBlurIntensity(50);
    setPreviewResolution(350);
  };

  return (
    <>
      <Helmet>
        <title>Advanced Image Blur | Oslo Toolbox</title>
        <meta name="description" content="Professional image blur effects with Gaussian, Motion, Average, Stack, and Directional blur options. Create stunning visual effects for your projects." />
        <meta name="keywords" content="image blur, gaussian blur, motion blur, stack blur, directional blur, image effects, web design tools" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Images/Blur" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col rounded-lg border-2 p-4 md:p-6">
        {selectedFile ? (
          <div className="flex w-full flex-col gap-4 lg:flex-row">
            <div className="flex h-auto w-full flex-col gap-4">
              <div className="flex items-end gap-2 md:gap-4">
                <span className="border-border-light dark:border-border-dark flex max-w-2/5 justify-center rounded-md border p-2 md:max-w-1/3 lg:justify-start">
                  <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="h-auto" />
                </span>
                {/* Settings */}
                <div className="flex w-full flex-col gap-1">
                  <DropdownInput id="blur-type" label="Blur Type" value={blurType} onChange={handleBlurTypeChange} options={blurTypes} />
                  <SliderInput id="blur-intensity" label="Blur Intensity" min={10} max={100} value={blurIntensity} onChange={handleBlurIntensityChange} />
                  {(blurType === "motion" || blurType === "directional") && <SliderInput id="motion-angle" label="Angle (degrees)" min={0} max={360} value={motionAngle} onChange={handleMotionAngleChange} valueSuffix="°" />}
                  {(blurType === "average" || blurType === "stack") && <SliderInput id="kernel-size" label="Kernel Size" min={3} max={21} step={2} value={kernelSize} onChange={handleKernelSizeChange} valueSuffix=" px" />}
                  <SliderInput id="preview-resolution" label="Resolution" min={50} max={1000} value={previewResolution} onChange={handlePreviewResolutionChange} valueSuffix=" px" />
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4">
                <ButtonNeutralCta className="flex items-center justify-center gap-2" onClick={handleReset}>
                  <VscDebugRestart /> Select a different image
                </ButtonNeutralCta>
                <ButtonMainCta className="flex items-center justify-center gap-2" onClick={downloadImage} disabled={!hasAppliedBlur}>
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
