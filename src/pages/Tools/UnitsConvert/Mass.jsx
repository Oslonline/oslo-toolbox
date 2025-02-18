import { Helmet } from "react-helmet";
import Converter from "../../../components/toolspage/Converter";
import FAQSection from "../../../components/Faq";

function Mass() {
  const units = {
    All: ["Gigatonne", "Megatonne", "Tonne", "Kilogram", "Gram", "Milligram", "Microgram", "Nanogram", "Picogram", "US ton", "UK ton", "Pound", "Ounce"],
    SI: ["Gigatonne", "Megatonne", "Tonne", "Kilogram", "Gram", "Milligram", "Microgram", "Nanogram", "Picogram"],
    US: ["US ton", "UK ton", "Pound", "Ounce"],
  };

  const unitValues = {
    Gigatonne: 1e15,
    Megatonne: 1e12,
    Tonne: 1e9,
    Kilogram: 1e3,
    Gram: 1,
    Milligram: 1e-3,
    Microgram: 1e-6,
    Nanogram: 1e-9,
    Picogram: 1e-12,
    "US ton": 907185000,
    "UK ton": 1016000000,
    Pound: 453.59,
    Ounce: 28.35,
  };

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Mass Converter - Convert Units of Mass | Oslo Toolbox</title>
        <meta name="description" content="Free mass converter tool to convert between different units of mass including metric and imperial systems. Convert between gigatonnes, pounds, ounces, and more." />
        <meta name="keywords" content="mass converter, unit converter, convert mass, kilograms, pounds, ounces, metric units, imperial units, weight conversion tool, tonne, gram, megatonne, gigatonne" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Mass" />
      </Helmet>

      <Converter
        description="This toolbox provides you a completely FREE mass converter including the international system of units & the imperial system of units with US & UK units. For more information about the data used for converting, scroll down and check under the converter."
        systems={["All", "SI", "US"]}
        units={units}
        unitValues={unitValues}
      />

      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
        <p className="text-gray-700 dark:text-gray-400">
          To use the mass converter, select the units you want to convert from and to, and input the value you wish to convert. The tool will instantly display the converted value in the selected units. This converter supports a wide range of mass units including metric units like kilograms and
          imperial units like pounds. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
        </p>
        <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Units of Mass</h3>
        <p className="text-gray-700 dark:text-gray-400">
          - <strong>Gigatonne:</strong> A metric unit of mass equal to 1,000,000,000,000,000,000 grams (1e15 grams). Used for very large masses.
          <br />- <strong>Megatonne:</strong> A metric unit of mass equal to 1,000,000,000,000 grams (1e12 grams). Commonly used for large-scale measurements.
          <br />- <strong>Tonne (Metric ton):</strong> A metric unit of mass equal to 1,000,000,000 grams (1e9 grams). Equivalent to 1,000 kilograms.
          <br />- <strong>Kilogram (kg):</strong> The base unit of mass in the International System of Units (SI). Equal to 1,000 grams.
          <br />- <strong>Gram (g):</strong> The base unit of mass in the metric system. Used for everyday measurements.
          <br />- <strong>Milligram (mg):</strong> A metric unit of mass equal to 0.001 grams. Used for very small measurements.
          <br />- <strong>Microgram (µg):</strong> A metric unit of mass equal to 0.000001 grams. Used in scientific contexts.
          <br />- <strong>Nanogram (ng):</strong> A metric unit of mass equal to 0.000000001 grams. Used in precise scientific measurements.
          <br />- <strong>Picogram (pg):</strong> A metric unit of mass equal to 0.000000000001 grams. Used for extremely small masses.
          <br />- <strong>US ton:</strong> An imperial unit of mass equal to 907,185 grams. Commonly used in the United States.
          <br />- <strong>UK ton (Long ton):</strong> An imperial unit of mass equal to 1,016,000 grams. Used in the United Kingdom.
          <br />- <strong>Pound (lb):</strong> An imperial unit of mass equal to 453.59 grams. Widely used in the United States and the UK.
          <br />- <strong>Ounce (oz):</strong> An imperial unit of mass equal to 28.35 grams. Used for smaller mass measurements.
        </p>
      </div>
      <FAQSection />
    </div>
  );
}

export default Mass;
