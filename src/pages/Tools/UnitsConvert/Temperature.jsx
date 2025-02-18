import { Helmet } from "react-helmet";
import Converter from "../../../components/toolspage/Converter";
import FAQSection from "../../../components/Faq";

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

      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
        <p className="text-gray-700 dark:text-gray-400">
          To use the temperature converter, select the temperature scales you want to convert from and to, then input the value you wish to convert. The tool will instantly display the converted temperature in the selected scale. This converter supports Celsius, Fahrenheit, and Kelvin. For detailed
          conversions, you can also check the specific formulas used in the tool by scrolling down.
        </p>
        <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Temperature Scales</h3>
        <p className="text-gray-700 dark:text-gray-400">
          - <strong>Celsius (°C):</strong> A metric temperature scale where 0°C is the freezing point of water and 100°C is the boiling point.
          <br />- <strong>Fahrenheit (°F):</strong> An imperial temperature scale where 32°F is the freezing point of water and 212°F is the boiling point.
          <br />- <strong>Kelvin (K):</strong> A temperature scale used in scientific contexts where 0 K is absolute zero, the point at which all molecular motion ceases.
        </p>
      </div>
      <FAQSection />
    </div>
  );
}

export default Temperature;
