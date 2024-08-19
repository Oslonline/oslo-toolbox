import { useState, useEffect } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import GeneratedCSS from "../../../components/CSS/GeneratedCSS";
import patternImage from "/images/pattern.webp";
import { Helmet } from "react-helmet";

function Gradient() {
  const [colorA, setColorA] = useState("#fb923c");
  const [colorB, setColorB] = useState("#22c1c3");
  const [opacity, setOpacity] = useState(1);
  const [angle, setAngle] = useState(110);
  const [gradientType, setGradientType] = useState("linear");
  const [result, setResult] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    generateGradient();
    console.log(angle);
  }, [colorA, colorB, opacity, angle, gradientType]);

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
      }, 1250);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

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

  const handleColorAChange = (e) => {
    setColorA(e.target.value);
  };

  const handleColorBChange = (e) => {
    setColorB(e.target.value);
  };

  const handleOpacityChange = (e) => {
    setOpacity(e.target.value);
  };

  const handleAngleChange = (angle) => {
    setAngle(angle);
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
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <Helmet>
        <title>Free CSS Gradient Generator - Linear and Radial | Oslo Toolbox</title>
        <meta name="description" content="Create beautiful CSS gradients with our free generator. Customize colors, angles, opacity, and gradient types. Copy the generated CSS code easily." />
        <meta name="keywords" content="CSS gradient generator, online gradient tool, linear gradient, radial gradient, CSS design tools, web design, gradient background, CSS code generator, UI design, Oslo Toolbox" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Css/Gradient" />
      </Helmet>

      <div>
        <h2 className="text-gray-700">A free CSS gradient generator with custom colors, angle, and you can even choose the gradient type!</h2>
      </div>

      <div className="flex flex-col-reverse justify-between gap-4 md:gap-6 lg:flex-row">
        <div className="flex flex-col gap-6 rounded-md border-2 border-gray-200 bg-white p-4 lg:w-2/4">
          <div className="flex w-full md:gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-gray-500">Color</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <input className="h-12 w-16 appearance-none rounded-md border border-gray-300 p-2 focus:outline-none" type="color" value={colorA} onChange={handleColorAChange} />
                  <input className="w-24 rounded-md border-2 border-gray-200 px-2 py-2 caret-orange-400 outline-none focus:border-orange-400" type="text" value={colorA} onChange={handleColorAChange} />
                </div>
                <div className="flex items-center gap-2">
                  <input className="h-12 w-16 appearance-none rounded-md border border-gray-300 p-2 focus:outline-none" type="color" value={colorB} onChange={handleColorBChange} />
                  <input className="w-24 rounded-md border-2 border-gray-200 px-2 py-2 caret-orange-400 outline-none focus:border-orange-400" type="text" value={colorB} onChange={handleColorBChange} />
                </div>
              </div>
            </div>
            <div className={`hidden flex-col gap-4 md:flex ${gradientType === "radial" ? "hidden" : "block"}`}>
              <h4 className="font-semibold text-gray-500">Angle</h4>
              <CircularSlider trackColor="#eeeeee" hideKnobRing={true} progressSize={10} knobColor="#fb923c" knobSize={32} hideLabelValue={true} valueFontSize="1rem" label="" min="0" max="360" width="70" value={angle} onChange={handleAngleChange}/>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <h5 className="font-semibold text-gray-500">Gradient type:</h5>
            <select className="rounded-md px-3 py-2 hover:cursor-pointer" value={gradientType} onChange={handleGradientTypeChange}>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <h6 className="font-semibold text-gray-500">Opacity:</h6>
            <div className="flex items-center gap-2">
              <label className="text-gray-500" htmlFor="gradientOpacityInput">
                0
              </label>
              <input id="gradientOpacityInput" className="accent-orange-400" type="range" name="opacity" value={opacity} min="0" max="1" step="0.05" onChange={handleOpacityChange} />
              <label className="text-gray-500" htmlFor="gradientOpacityInput">
                1
              </label>
            </div>
          </div>
        </div>

        <div
          className="h-64 w-full rounded-md border-2 border-gray-200 bg-white lg:h-full lg:w-2/4"
          style={{
            backgroundImage: `url(${patternImage})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div
            className="h-full w-full rounded-md"
            style={{
              background: gradientType === "linear" ? `linear-gradient(${angle}deg, rgba(${hexToRGBA(colorA, opacity)}) 0%, rgba(${hexToRGBA(colorB, opacity)}) 100%)` : `radial-gradient(circle, rgba(${hexToRGBA(colorA, opacity)}) 0%, rgba(${hexToRGBA(colorB, opacity)}) 100%)`,
            }}
          ></div>
        </div>
      </div>

      {result && <GeneratedCSS result={result} copySuccess={copySuccess} copyToClipboard={copyToClipboard} />}

      <div>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-2">
          <h3 className="font-semibold text-gray-900">What is a CSS gradient?</h3>
          <p className="text-gray-600">A CSS gradient is a way to display a smooth transition between two or more colors. You can use gradients for backgrounds, buttons, and more to create visually appealing designs.</p>
          <h3 className="mt-2 font-semibold text-gray-900">How do I generate a CSS gradient?</h3>
          <p className="text-gray-600">Simply choose your colors, adjust the angle or type of gradient, and the CSS code will be automatically generated. You can then copy the code and paste it into your stylesheet.</p>
          <h3 className="mt-2 font-semibold text-gray-900">What is the difference between linear and radial gradients?</h3>
          <p className="text-gray-600">A linear gradient transitions colors along a straight line (horizontal, vertical, or diagonal), while a radial gradient transitions colors outward from a central point in a circular or elliptical shape.</p>
        </div>
      </div>
    </div>
  );
}

export default Gradient;
