import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { ChromePicker } from "react-color";
import GeneratedCSS from "../../../components/toolspage/GeneratedCSS";
import FAQSection from "../../../components/Faq";
import SliderInput from "../../../components/ui/SliderInput";

function BoxShadow() {
  const [boxShadow, setBoxShadow] = useState({
    offsetX: 10,
    offsetY: 10,
    blurRadius: 0,
    spreadRadius: 0,
    color: "#14b8a6",
    opacity: 100,
  });
  const [copySuccess, setCopySuccess] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBoxShadow((prevState) => ({
      ...prevState,
      [name]: name === "color" ? value : name === "opacity" ? parseFloat(value) : parseInt(value),
    }));
  };

  const handleColorChange = (color) => {
    setBoxShadow((prevState) => ({
      ...prevState,
      color: color.hex,
    }));
  };

  const hexToRGBA = (hex, opacity) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

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
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const result = `box-shadow: ${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px ${hexToRGBA(boxShadow.color, boxShadow.opacity)};`;

  return (
    <>
      <Helmet>
        <title>CSS Box-Shadow Generator - Customize Your Shadows Online</title>
        <meta name="description" content="Easily create custom CSS box-shadow effects with our free online tool. Adjust offset, blur-sm, spread, color, and opacity to generate the perfect shadow-sm for your project." />
        <meta name="keywords" content="CSS box-shadow generator, free online CSS tools, custom shadow-sm generator, CSS effects, web design tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Css/BoxShadow" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col gap-4 rounded-lg border-2 p-4 md:flex-row md:p-6">
        <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light flex flex-col gap-3 rounded-md border-2 p-4 md:w-1/2">
          <div>
            <h3 className="">Settings :</h3>
          </div>
          <hr className="dark:border-border-dark border-border-light" />
          <div className="flex flex-col">
            <SliderInput
              id="offsetX"
              label="Offset X"
              min={-50}
              max={50}
              value={boxShadow.offsetX}
              onChange={handleChange}
            />
            <SliderInput
              id="offsetY"
              label="Offset Y"
              min={-50}
              max={50}
              value={boxShadow.offsetY}
              onChange={handleChange}
            />
            <SliderInput
              id="blurRadius"
              label="Blur radius"
              min={0}
              max={50}
              value={boxShadow.blurRadius}
              onChange={handleChange}
            />
            <SliderInput
              id="spreadRadius"
              label="Spread radius"
              min={0}
              max={50}
              value={boxShadow.spreadRadius}
              onChange={handleChange}
            />
            <SliderInput
              id="opacity"
              label="Opacity"
              min={0}
              max={100}
              step={10}
              value={boxShadow.opacity}
              onChange={handleChange}
              valueSuffix="%"
            />
            <div>
              <p className="dark:text-text-border-light text-text-border-dark text-sm">Color</p>
              <div className="relative mt-1 flex items-center gap-4">
                <button onClick={() => setShowColorPicker(!showColorPicker)} className="border-border-light dark:hover:bg-text-border-dark hover:bg-text-border-light dark:border-border-dark flex w-fit items-center gap-1 rounded-md border p-1 px-2 text-sm duration-150 hover:cursor-pointer">
                  <span className="inline-block h-4 w-4 rounded-full border" style={{ backgroundColor: boxShadow.color }}></span>
                  {boxShadow.color}
                </button>
                {showColorPicker && (
                  <div ref={colorPickerRef} className="absolute top-10 z-10">
                    <ChromePicker color={boxShadow.color} onChange={handleColorChange} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light flex h-56 flex-col rounded-md border-2 p-4 md:h-auto md:w-1/2">
          <div>
            <h4 className="font-semibold text-gray-600 dark:text-gray-400">Preview :</h4>
          </div>
          <div className="flex h-full items-center justify-center rounded-md">
            <div
              className="bg-border-light dark:bg-border-dark h-24 w-3/5 rounded p-5 md:h-48 md:w-2/3 lg:w-6/12"
              style={{
                boxShadow: `${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px ${hexToRGBA(boxShadow.color, boxShadow.opacity)}`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <GeneratedCSS result={result} copyToClipboard={copyToClipboard} copySuccess={copySuccess} />

      <FAQSection />
    </>
  );
}

export default BoxShadow;
