import { useState, useEffect } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import GeneratedCSS from "../../../components/CSS/GeneratedCSS";
import patternImage from "/images/pattern.webp";

function Gradient() {
  const [colorA, setColorA] = useState("#dbd90b");
  const [colorB, setColorB] = useState("#22c1c3");
  const [opacity, setOpacity] = useState(1);
  const [angle, setAngle] = useState(0);
  const [gradientType, setGradientType] = useState("linear");
  const [result, setResult] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

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
    <div className="flex flex-col gap-7 p-6">
      <div>
        <h2 className="text-gray-700">A free CSS gradient generator with custom colors, angle and you can even choose the gradient type !!</h2>
      </div>
      <div className="flex flex-col-reverse justify-between gap-6 lg:flex-row">
        <div className="flex flex-col gap-3 rounded-md border-2 border-gray-200 bg-white p-4 lg:w-2/4">
          <div className="flex w-full gap-10">
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
            <div className={`flex flex-col gap-4 ${gradientType === "radial" ? "hidden" : "block"}`}>
              <h4 className="font-semibold text-gray-500">Angle</h4>
              <div>
                <CircularSlider trackColor="#eeeeee" progressSize={10} knobColor="#fb923c" knobSize={32} hideLabelValue={true} valueFontSize="1rem" label="" min="0" max="360" width="70" value={angle} onChange={handleAngleChange} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h5 className="font-semibold text-gray-500">Gradient type :</h5>
            <select className="rounded-md px-3 py-2 hover:cursor-pointer" value={gradientType} onChange={handleGradientTypeChange}>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="font-semibold text-gray-500">Opacity :</h6>
            <label className="text-gray-500" htmlFor="gradientOpacityInput">
              0
            </label>
            <input id="gradientOpacityInput" type="range" name="opacity" value={opacity} min="0" max="1" step="0.05" onChange={handleOpacityChange} />
            <label className="text-gray-500" htmlFor="gradientOpacityInput">
              1
            </label>
          </div>
        </div>
        <div className="h-64 rounded-md border-2 border-gray-200 bg-white lg:h-full lg:w-2/4" style={{ backgroundImage: `url(${patternImage})`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
          <div
            className="h-full w-full rounded-md"
            style={{
              background: gradientType === "linear" ? `linear-gradient(${angle}deg, rgba(${hexToRGBA(colorA, opacity)}) 0%, rgba(${hexToRGBA(colorB, opacity)}) 100%)` : `radial-gradient(circle, rgba(${hexToRGBA(colorA, opacity)}) 0%, rgba(${hexToRGBA(colorB, opacity)}) 100%)`,
            }}
          ></div>
        </div>
      </div>
      {result && <GeneratedCSS result={result} copySuccess={copySuccess} copyToClipboard={copyToClipboard} />}
    </div>
  );
}

export default Gradient;
