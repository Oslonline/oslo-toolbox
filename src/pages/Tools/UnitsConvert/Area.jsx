import React from "react";
import Converter from "../../../components/Converter/Converter";
import { Helmet } from "react-helmet";

function Area() {
  const units = {
    SI: ["Square Kilometre (km²)", "Square Hectometre (hm²)", "Square Dekametre (dam²)", "Square Metre (m²)", "Square Decimetre (dm²)", "Square Centimetre (cm²)", "Square Millimetre (mm²)", "Square Micrometre (μm²)", "Square Nanometre (nm²)", "Hectare (ha)", "Are (a)"],
    US: ["Square Mile (mi²)", "Acre (ac)", "Square Yard (yd²)", "Square Foot (ft²)", "Square Mile (US Survey)", "Square Foot (US Survey)", "Acre (US Survey)", "Square Rod (US Survey)", "Circular Inch", "Township", "Section", "Rood", "Square Rod", "Square pole", "Circular Mil", "Homestead", "Sabin"],
    Others: ["Barn", "Plaza", "Varas Castellanas Cuad", "Varas Conuqueras Cuad", "Electron Cross Section", "Cuerda", "Arpent"],
    All: [
      "Square Kilometre (km²)",
      "Square Hectometre (hm²)",
      "Square Dekametre (dam²)",
      "Square Metre (m²)",
      "Square Decimetre (dm²)",
      "Square Centimetre (cm²)",
      "Square Millimetre (mm²)",
      "Square Micrometre (μm²)",
      "Square Nanometre (nm²)",
      "Hectare (ha)",
      "Are (a)",
      "Acre (ac)",
      "Square Mile (mi²)",
      "Square Yard (yd²)",
      "Square Foot (ft²)",
      "Square Mile (US Survey)",
      "Square Foot (US Survey)",
      "Square Rod (US Survey)",
      "Acre (US Survey)",
      "Circular Inch",
      "Township",
      "Section",
      "Rood",
      "Square Rod",
      "Square pole",
      "Circular Mil",
      "Homestead",
      "Sabin",
      "Barn",
      "Plaza",
      "Varas Castellanas Cuad",
      "Varas Conuqueras Cuad",
      "Electron Cross Section",
      "Cuerda",
      "Arpent",
    ],
  };

  const unitValues = {
    "Square Kilometre (km²)": 1e6,
    "Square Hectometre (hm²)": 1e8,
    "Square Dekametre (dam²)": 100,
    "Square Metre (m²)": 1,
    "Square Decimetre (dm²)": 0.01,
    "Square Centimetre (cm²)": 1e-4,
    "Square Millimetre (mm²)": 1e-6,
    "Square Micrometre (μm²)": 1e-12,
    "Square Nanometre (nm²)": 1e-18,
    "Hectare (ha)": 1e4,
    "Are (a)": 100,
    "Square Mile (mi²)": 2.59e6,
    "Acre (ac)": 4046.86,
    "Square Yard (yd²)": 0.836127,
    "Square Foot (ft²)": 0.092903,
    "Square Inch (in²)": 0.00064516,
    Barn: 1e-28,
    "Square Mile (US Survey)": 2.58999e6,
    "Square Foot (US Survey)": 0.0929034116,
    "Circular Inch": 0.0005067075,
    Township: 9.3239571972e7,
    Section: 2.58998811e6,
    "Acre (US Survey)": 4046.8726098743,
    Rood: 1011.7141056,
    "Square Chain": 404.68564224,
    "Square Rod": 25.29285264,
    "Square Rod (US Survey)": 25.2929538117,
    "Square Perch": 25.29285264,
    "Square Pole": 25.29285264,
    "Square Mil": 6.4516e-10,
    "Circular Mil": 5.067074790975e-10,
    Homestead: 647497.027584,
    Sabin: 0.09290304,
    Arpent: 3418.8929236669,
    Cuerda: 3930.395625,
    Plaza: 6400,
    "Varas Castellanas Cuad": 0.698737,
    "Varas Conuqueras Cuad": 6.288633,
    "Electron Cross Section": 6.6524615999999e-29,
  };

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Area Converter - Convert Units of Area | Oslo Toolbox</title>
        <meta name="description" content="Free area converter tool to convert between different units of area including metric, imperial, and other systems. Get accurate area conversions for units like square meters, acres, hectares, and more." />
        <meta name="keywords" content="area converter, unit converter, convert area, square meters, acres, hectares, imperial units, metric units, land measurement, area conversion tool" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Area" />
      </Helmet>

      <Converter
        description="This toolbox provides you a completely FREE area converter including the international system of units & the imperial system of units with US, UK & ES units. For more info about the data used for converting, scroll down and check under the converter."
        systems={["SI", "US", "Others", "All"]}
        units={units}
        unitValues={unitValues}
      />

      <div className="p-6 pt-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-700">
            To use the area converter, select the units you want to convert from and to, and input the value you wish to convert. The tool will instantly display the converted value in the selected units. Our converter supports a wide range of units including metric units like square meters and
            imperial units like acres. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
          </p>
          <h3 className="mt-4 font-semibold text-gray-900">Common Units of Area</h3>
          <p className="text-gray-700">
            - <strong>Square Meter (m²):</strong> The standard unit of area in the International System of Units (SI). Used globally for most area measurements.
            <br />- <strong>Acre (ac):</strong> A unit of area commonly used in the United States and the UK, particularly for measuring large plots of land.
            <br />- <strong>Hectare (ha):</strong> A metric unit of area equal to 10,000 square meters, commonly used in agriculture and forestry.
            <br />- <strong>Square Mile (mi²):</strong> A unit of area used primarily in the United States for measuring large areas of land.
            <br />- <strong>Square Inch (in²):</strong> A small unit of area used mainly for small-scale measurements.
            <br />- <strong>Barn:</strong> An extremely small unit of area used in nuclear and particle physics.
            <br />- <strong>Square Kilometre (km²):</strong> A metric unit of area equal to one million square meters, often used for larger areas.
            <br />- <strong>Square Hectometre (hm²):</strong> A metric unit of area equal to 10,000 square meters, used less frequently but still important for some applications.
            <br />- <strong>Square Dekametre (dam²):</strong> A metric unit of area equal to 100 square meters, used in some specific contexts.
            <br />- <strong>Square Decimetre (dm²):</strong> A metric unit of area equal to 0.01 square meters, used for small-scale measurements.
            <br />- <strong>Square Centimetre (cm²):</strong> A metric unit of area equal to 0.0001 square meters, commonly used for very small areas.
            <br />- <strong>Square Millimetre (mm²):</strong> A metric unit of area equal to 1e-6 square meters, used in detailed measurements.
            <br />- <strong>Square Micrometre (μm²):</strong> A metric unit of area equal to 1e-12 square meters, used in precision engineering.
            <br />- <strong>Square Nanometre (nm²):</strong> A metric unit of area equal to 1e-18 square meters, used in nanotechnology.
            <br />- <strong>Circular Mil:</strong> A unit used in electronics to measure the cross-sectional area of a wire.
            <br />- <strong>Township:</strong> A large unit of area used in land surveying, especially in the United States.
            <br />- <strong>Section:</strong> A unit of land area used in the United States, typically 1 square mile.
            <br />- <strong>Rood:</strong> An old unit of area used in land measurement, equivalent to 1/4 acre.
            <br />- <strong>Square Rod:</strong> A unit of area used in land measurement, equivalent to 1/160 acre.
            <br />- <strong>Square Pole:</strong> Another unit of area used in land measurement, similar to the square rod.
            <br />- <strong>Homestead:</strong> A large unit of area used historically in land grants.
            <br />- <strong>Sabin:</strong> A unit of area used in acoustics to measure sound absorption.
            <br />- <strong>Arpent:</strong> A unit of area used in various countries, particularly in historical contexts.
            <br />- <strong>Cuerda:</strong> A unit of area used in Puerto Rico and the Dominican Republic for measuring land.
            <br />- <strong>Plaza:</strong> A unit of area used in historical contexts, particularly in Latin America.
            <br />- <strong>Varas Castellanas Cuad:</strong> A unit of area used in Spain.
            <br />- <strong>Varas Conuqueras Cuad:</strong> A unit of area used in historical land measurement in Latin America.
            <br />- <strong>Electron Cross Section:</strong> A very small unit of area used in particle physics.
            <br />
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-900">What if I need to convert a unit not listed here?</h3>
            <p className="text-gray-600">If you need to convert a unit not listed in this converter, please contact us with the details. We may be able to add more units based on user requests and the availability of accurate conversion factors.</p>
            <h3 className="mt-4 font-semibold text-gray-900">Are there units with specific regional usage?</h3>
            <p className="text-gray-600">Yes, some units such as the "Acre (US Survey)" or "Varas Castellanas Cuad" are specific to certain regions or historical contexts. If you have any questions about these units, feel free to ask!</p>
            <h3 className="mt-4 font-semibold text-gray-900">How can I ensure the conversion results are correct?</h3>
            <p className="text-gray-600">We use accurate conversion factors based on standard references. However, for specific applications, we recommend cross-referencing the results with other reliable sources or standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
