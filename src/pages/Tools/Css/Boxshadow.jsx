import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import GeneratedCSS from "../../../components/CSS/GeneratedCSS";
import FAQSection from "../../../components/commons/Faq";

function BoxShadow() {
  const [boxShadow, setBoxShadow] = useState({
    offsetX: 10,
    offsetY: 10,
    blurRadius: 5,
    spreadRadius: 2,
    color: "#fb923c",
    opacity: 100,
  });
  const [copySuccess, setCopySuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBoxShadow((prevState) => ({
      ...prevState,
      [name]: name === "color" ? value : name === "opacity" ? parseFloat(value) : parseInt(value),
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

  const faqData = [
    {
      question: "What is a box-shadow in CSS ?",
      answer: "A box-shadow in CSS is a shadow-sm effect applied to an element’s box, allowing you to create depth and visual interest by adding an offset shadow.",
    },
    {
      question: "How do I use this tool?",
      answer: "Adjust the sliders and inputs to customize your shadow. The CSS code will be generated automatically, which you can copy and use in your stylesheets.",
    },
    {
      question: "Can I control the opacity of the shadow?",
      answer: "Yes, you can adjust the opacity of the shadow-sm using the opacity slider. This allows you to create both subtle and bold shadow-sm effects.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <Helmet>
        <title>CSS Box-Shadow Generator - Customize Your Shadows Online</title>
        <meta name="description" content="Easily create custom CSS box-shadow effects with our free online tool. Adjust offset, blur-sm, spread, color, and opacity to generate the perfect shadow-sm for your project." />
        <meta name="keywords" content="CSS box-shadow generator, free online CSS tools, custom shadow-sm generator, CSS effects, web design tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Css/BoxShadow" />
      </Helmet>

      <div>
        <h2 className="text-gray-900 dark:text-gray-100">Free CSS Box-Shadow Generator</h2>
        <p className="text-gray-600 dark:text-gray-400">Customize your box-shadow effects with ease. Adjust the shadow’s offset, blur, spread, color, and opacity to achieve the perfect look for your elements. Copy the generated CSS code and use it directly in your projects.</p>
      </div>

      <div className="flex flex-col-reverse justify-between gap-4 md:gap-6 lg:flex-row">
        <div className="flex flex-col gap-3 rounded-md border-2 border-gray-200 bg-gray-50 p-4 lg:w-2/4 dark:border-gray-800 dark:bg-gray-900">
          <div>
            <h3 className="font-semibold text-gray-600 dark:text-gray-400">Settings :</h3>
          </div>
          <hr className="dark:border-gray-700" />
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <p>Offset X</p>
                <p>{boxShadow.offsetX}</p>
              </div>
              <input className="w-full" type="range" name="offsetX" value={boxShadow.offsetX} min="-50" max="50" onChange={handleChange} />
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <p>Offset Y</p>
                <p>{boxShadow.offsetY}</p>
              </div>
              <input className="w-full" type="range" name="offsetY" value={boxShadow.offsetY} min="-50" max="50" onChange={handleChange} />
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <p>Blur radius</p>
                <p>{boxShadow.blurRadius}</p>
              </div>
              <input className="w-full" type="range" name="blurRadius" value={boxShadow.blurRadius} min="0" max="50" onChange={handleChange} />
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <p>Spread radius</p>
                <p>{boxShadow.spreadRadius}</p>
              </div>
              <input className="w-full" type="range" name="spreadRadius" value={boxShadow.spreadRadius} min="0" max="50" onChange={handleChange} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Color</p>
              <div className="mt-1 flex items-center gap-4">
                <input className="h-12 w-16 appearance-none rounded-md border border-gray-300 p-2 focus:outline-hidden dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500" type="color" value={boxShadow.color} onChange={handleChange} name="color" />
                <input className="w-20 rounded-md bg-gray-100 px-2 py-2 caret-orange-400 outline-hidden focus:outline-orange-400 dark:bg-gray-950 dark:caret-orange-600 dark:focus:outline-orange-600" type="text" value={boxShadow.color} onChange={handleChange} name="color" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <p>Opacity</p>
                <p>{boxShadow.opacity}%</p>
              </div>
              <input className="w-full" type="range" name="opacity" value={boxShadow.opacity} min="0" max="100" step="10" onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="f flex h-56 flex-col rounded-md border-2 border-gray-200 bg-white p-4 md:h-96 lg:h-full lg:w-2/4 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-950">
          <div>
            <h4 className="font-semibold text-gray-600 dark:text-gray-400">Preview :</h4>
          </div>
          <div className="flex h-full items-center justify-center rounded-md">
            <div
              className="h-24 w-3/5 rounded-md bg-gray-100 p-5 md:h-48 md:w-2/3 lg:w-6/12 dark:bg-gray-900"
              style={{
                boxShadow: `${boxShadow.offsetX}px ${boxShadow.offsetY}px ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px ${hexToRGBA(boxShadow.color, boxShadow.opacity)}`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <GeneratedCSS result={result} copyToClipboard={copyToClipboard} copySuccess={copySuccess} />

      <FAQSection faqs={faqData} />
    </div>
  );
}

export default BoxShadow;
