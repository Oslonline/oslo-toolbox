import React from "react";
import Converter from "../../../components/Converter/Converter";
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
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-700">
            To use the temperature converter, select the temperature scales you want to convert from and to, then input the value you wish to convert. The tool will instantly display the converted temperature in the selected scale. This converter supports Celsius, Fahrenheit, and Kelvin. For
            detailed conversions, you can also check the specific formulas used in the tool by scrolling down.
          </p>
          <h3 className="mt-4 font-semibold text-gray-900">Common Temperature Scales</h3>
          <p className="text-gray-700">
            - <strong>Celsius (°C):</strong> A metric temperature scale where 0°C is the freezing point of water and 100°C is the boiling point.
            <br />- <strong>Fahrenheit (°F):</strong> An imperial temperature scale where 32°F is the freezing point of water and 212°F is the boiling point.
            <br />- <strong>Kelvin (K):</strong> A temperature scale used in scientific contexts where 0 K is absolute zero, the point at which all molecular motion ceases.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-900">How do I convert between Celsius, Fahrenheit, and Kelvin?</h3>
            <p className="text-gray-700">
              To convert between these temperature scales, you can use the provided formulas:
              <ul className="ml-5 list-disc">
                <li>
                  <strong>Celsius to Fahrenheit:</strong> (°C * 9/5) + 32
                </li>
                <li>
                  <strong>Celsius to Kelvin:</strong> °C + 273.15
                </li>
                <li>
                  <strong>Fahrenheit to Celsius:</strong> (°F - 32) * 5/9
                </li>
                <li>
                  <strong>Fahrenheit to Kelvin:</strong> ((°F - 32) * 5/9) + 273.15
                </li>
                <li>
                  <strong>Kelvin to Celsius:</strong> K - 273.15
                </li>
                <li>
                  <strong>Kelvin to Fahrenheit:</strong> ((K - 273.15) * 9/5) + 32
                </li>
              </ul>
            </p>
            <h3 className="mt-4 font-semibold text-gray-900">Why is Kelvin used in scientific contexts?</h3>
            <p className="text-gray-600">Kelvin is used in scientific contexts because it starts at absolute zero, the point at which there is no thermal energy. This makes it a natural choice for many scientific calculations and measurements.</p>
            <h3 className="mt-4 font-semibold text-gray-900">What is the boiling and freezing point of water in these scales?</h3>
            <p className="text-gray-600">In Celsius, water freezes at 0°C and boils at 100°C. In Fahrenheit, water freezes at 32°F and boils at 212°F. In Kelvin, water freezes at 273.15 K and boils at 373.15 K.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
