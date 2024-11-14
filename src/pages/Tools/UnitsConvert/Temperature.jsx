import React from "react";
import Converter from "../../../components/converters/Converter";
import FAQSection from "../../../components/commons/Faq";
import { Helmet } from "react-helmet";

function Temperature() {
  const units = {
    All: ["Celsius", "Fahrenheit", "Kelvin"],
  };

  const unitValues = {
    Celsius: {
      Celsius: (value) => parseFloat(value),
      Fahrenheit: (value) => (parseFloat(value) * 9) / 5 + 32,
      Kelvin: (value) => parseFloat(value) + 273.15,
    },
    Fahrenheit: {
      Celsius: (value) => ((parseFloat(value) - 32) * 5) / 9,
      Fahrenheit: (value) => parseFloat(value),
      Kelvin: (value) => ((parseFloat(value) - 32) * 5) / 9 + 273.15,
    },
    Kelvin: {
      Celsius: (value) => parseFloat(value) - 273.15,
      Fahrenheit: (value) => ((parseFloat(value) - 273.15) * 9) / 5 + 32,
      Kelvin: (value) => parseFloat(value),
    },
  };

  const faqData = [
    {
      question: "How do I convert between Celsius, Fahrenheit, and Kelvin?",
      answer:
        "To convert between these temperature scales, you can use the provided formulas:\n\n- Celsius to Fahrenheit: (°C * 9/5) + 32\n- Celsius to Kelvin: °C + 273.15\n- Fahrenheit to Celsius: (°F - 32) * 5/9\n- Fahrenheit to Kelvin: ((°F - 32) * 5/9) + 273.15\n- Kelvin to Celsius: K - 273.15\n- Kelvin to Fahrenheit: ((K - 273.15) * 9/5) + 32",
    },
    {
      question: "Why is Kelvin used in scientific contexts?",
      answer: "Kelvin is used in scientific contexts because it starts at absolute zero, the point at which there is no thermal energy. This makes it a natural choice for many scientific calculations and measurements.",
    },
    {
      question: "What is the boiling and freezing point of water in these scales?",
      answer: "In Celsius, water freezes at 0°C and boils at 100°C. In Fahrenheit, water freezes at 32°F and boils at 212°F. In Kelvin, water freezes at 273.15 K and boils at 373.15 K.",
    },
  ];

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Temperature Converter - Convert Celsius, Fahrenheit, and Kelvin | Oslo Toolbox</title>
        <meta name="description" content="Free temperature converter tool to convert between Celsius, Fahrenheit, and Kelvin. Get accurate conversions for various temperature scales." />
        <meta name="keywords" content="temperature converter, convert temperature, Celsius, Fahrenheit, Kelvin, temperature scales, unit conversion" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Temperature" />
      </Helmet>

      <Converter
        description="This toolbox provides you with a completely FREE temperature converter including Celsius, Fahrenheit, and Kelvin scales. For more information about the data used for converting, scroll down and check under the converter."
        systems={["All"]}
        units={units}
        unitValues={unitValues}
      />

      <div className="p-6 pt-0">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
          <p className="text-gray-700 dark:text-gray-400">
            To use the temperature converter, select the temperature scales you want to convert from and to, then input the value you wish to convert. The tool will instantly display the converted temperature in the selected scale. This converter supports Celsius, Fahrenheit, and Kelvin. For
            detailed conversions, you can also check the specific formulas used in the tool by scrolling down.
          </p>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Temperature Scales</h3>
          <p className="text-gray-700 dark:text-gray-400">
            - <strong>Celsius (°C):</strong> A metric temperature scale where 0°C is the freezing point of water and 100°C is the boiling point.
            <br />- <strong>Fahrenheit (°F):</strong> An imperial temperature scale where 32°F is the freezing point of water and 212°F is the boiling point.
            <br />- <strong>Kelvin (K):</strong> A temperature scale used in scientific contexts where 0 K is absolute zero, the point at which all molecular motion ceases.
          </p>
        </div>
        <FAQSection faqs={faqData} />
      </div>
    </div>
  );
}

export default Temperature;
