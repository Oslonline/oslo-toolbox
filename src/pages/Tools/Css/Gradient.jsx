import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import patternImage from "/images/pattern.webp";
import { ChromePicker } from "react-color";
import GeneratedCSS from "../../../components/toolspage/GeneratedCSS";
import FAQSection from "../../../components/Faq";

function Gradient() {
  const [colorA, setColorA] = useState("#14b8a6");
  const [colorB, setColorB] = useState("#7f2cf4");
  const [showColorPickerA, setShowColorPickerA] = useState(false);
  const [showColorPickerB, setShowColorPickerB] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [angle, setAngle] = useState(0);
  const [gradientType, setGradientType] = useState("linear");
  const [result, setResult] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const colorPickerARef = useRef();
  const colorPickerBRef = useRef();

  useEffect(() => {
    generateGradient();
  }, [colorA, colorB, opacity, angle, gradientType]);

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
      }, 1250);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerARef.current && !colorPickerARef.current.contains(event.target)) {
        setShowColorPickerA(false);
      }
      if (colorPickerBRef.current && !colorPickerBRef.current.contains(event.target)) {
        setShowColorPickerB(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const generateGradient = () => {
    const gradientColorA = hexToRGBA(colorA, opacity);
    const gradientColorB = hexToRGBA(colorB, opacity);

    let code;
    if (gradientType === "linear") {
      code = `background: linear-gradient(${angle}deg, rgba(${gradientColorA}) 0%, rgba(${gradientColorB}) 100%);`;
    } else {
      code = `background: radial-gradient(circle, rgba(${gradientColorA}) 0%, rgba(${gradientColorB}) 100%);`;
    }

    setResult(code);
    setCopySuccess(false);
  };

  const hexToRGBA = (hex, opacity) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}, ${opacity}`;
  };

  const handleColorAChange = (color) => {
    setColorA(color.hex);
  };

  const handleColorBChange = (color) => {
    setColorB(color.hex);
  };

  const handleOpacityChange = (e) => {
    setOpacity(e.target.value);
  };

  const handleAngleChange = (e) => {
    setAngle(e.target.value);
  };

  const handleGradientTypeChange = (e) => {
    setGradientType(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${result}`)
      .then(() => {
        setCopySuccess(true);
      })
      .catch(() => {
        setCopySuccess(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Free CSS Gradient Generator - Linear and Radial | Oslo Toolbox</title>
        <meta name="description" content="Create beautiful CSS gradients with our free generator. Customize colors, angles, opacity, and gradient types. Copy the generated CSS code easily." />
        <meta name="keywords" content="CSS gradient generator, online gradient tool, linear gradient, radial gradient, CSS design tools, web design, gradient background, CSS code generator, UI design, Oslo Toolbox" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Css/Gradient" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col gap-4 rounded-lg border-2 p-4 md:flex-row md:p-6">
        <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light flex flex-col gap-3 rounded-md border-2 p-4 md:w-1/2">
          <div className="flex w-full md:gap-10">
            <div className="flex flex-col gap-3">
              <div className="relative flex items-center gap-2">
                <p className="text-sm">From:</p>
                <button onClick={() => setShowColorPickerA(!showColorPickerA)} className="border-border-light dark:hover:bg-text-border-dark hover:bg-text-border-light dark:border-border-dark flex w-fit items-center gap-1 rounded-md border p-1 px-2 text-sm duration-150 hover:cursor-pointer">
                  <span className="inline-block h-4 w-4 rounded-full border" style={{ backgroundColor: colorA }}></span>
                  {colorA}
                </button>
                {showColorPickerA && (
                  <div ref={colorPickerARef} className="absolute top-10 z-10">
                    <ChromePicker color={colorA} onChange={handleColorAChange} />
                  </div>
                )}
              </div>
              <div className="relative flex items-center gap-2">
                <p className="text-sm">To:</p>
                <button onClick={() => setShowColorPickerB(!showColorPickerB)} className="border-border-light dark:hover:bg-text-border-dark hover:bg-text-border-light dark:border-border-dark flex w-fit items-center gap-1 rounded-md border p-1 px-2 text-sm duration-150 hover:cursor-pointer">
                  <span className="inline-block h-4 w-4 rounded-full border" style={{ backgroundColor: colorB }}></span>
                  {colorB}
                </button>
                {showColorPickerB && (
                  <div ref={colorPickerBRef} className="absolute top-10 z-10">
                    <ChromePicker color={colorB} onChange={handleColorBChange} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {gradientType === "linear" && (
            <div className="flex flex-col gap-2 md:flex-row">
              <h6 className="font-semibold text-gray-600 dark:text-gray-400">Angle:</h6>
              <div className="flex items-center gap-2">
                <label htmlFor="gradientAngleInput">0</label>
                <input id="gradientAngleInput" className="accent-accent" type="range" name="angle" value={angle} min="0" max="360" step="1" onChange={handleAngleChange} />
                <label htmlFor="gradientAngleInput">360</label>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2 md:flex-row">
            <h6 className="font-semibold text-gray-600 dark:text-gray-400">Opacity:</h6>
            <div className="flex items-center gap-2">
              <label htmlFor="gradientOpacityInput">0</label>
              <input id="gradientOpacityInput" className="accent-accent" type="range" name="opacity" value={opacity} min="0" max="1" step="0.05" onChange={handleOpacityChange} />
              <label htmlFor="gradientOpacityInput">1</label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <h5 className="font-semibold text-gray-600 dark:text-gray-400">Gradient type:</h5>
            <select className="dark:border-border-dark dark:bg-dark bg-light border-border-light w-fit rounded-md border-2 p-2 hover:cursor-pointer" value={gradientType} onChange={handleGradientTypeChange}>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>

        <div
          className="dark:border-border-dark border-border-light min-h-52 w-full rounded-md border-2 lg:w-2/4"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div
            className="h-full w-full rounded-sm"
            style={{
              background: gradientType === "linear" ? `linear-gradient(${angle}deg, rgba(${hexToRGBA(colorA, opacity)}) 0%, rgba(${hexToRGBA(colorB, opacity)}) 100%)` : `radial-gradient(circle, rgba(${hexToRGBA(colorA, opacity)}) 0%, rgba(${hexToRGBA(colorB, opacity)}) 100%)`,
            }}
          ></div>
        </div>
      </div>

      {result && <GeneratedCSS result={result} copySuccess={copySuccess} copyToClipboard={copyToClipboard} />}

      <FAQSection />
    </>
  );
}

export default Gradient;
