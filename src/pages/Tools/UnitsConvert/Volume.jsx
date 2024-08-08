import React from "react";
import Converter from "../../../components/Converter/Converter";
import { Helmet } from "react-helmet";

function Volume() {
  const units = {
    SI: ["Cubic meter", "Cubic centimeter", "Cubic millimeter"],
    USLiquid: ["Teaspoon", "Tablespoon", "Fluid ounce", "Cup", "Pint", "Quart", "Gallon"],
    USDry: ["Dry pint", "Dry quart", "Dry gallon"],
    UK: ["Fluid ounce", "Gill", "Pint", "Quart", "Gallon"],
    All: ["Cubic meter", "Cubic centimeter", "Cubic millimeter", "Teaspoon", "Tablespoon", "Fluid ounce", "Cup", "Pint", "Quart", "Gallon", "Dry pint", "Dry quart", "Dry gallon", "Gill"],
  };

  const unitValues = {
    "Cubic meter": 1,
    "Cubic centimeter": 1e-6,
    "Cubic millimeter": 1e-9,
    Teaspoon: 4.929e-6,
    Tablespoon: 14.787e-6,
    "Fluid ounce": 29.574e-6,
    Cup: 236.588e-6,
    Pint: 473.176e-6,
    Quart: 946.353e-6,
    Gallon: 3.78541e-3,
    "Dry pint": 550.61e-6,
    "Dry quart": 1101.221e-6,
    "Dry gallon": 4.404884e-3,
    Gill: 142.065e-6,
  };

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Volume Converter - Convert Units of Volume | Oslo Toolbox</title>
        <meta name="description" content="Free volume converter tool to convert between various units of volume including cubic meters, liters, teaspoons, tablespoons, and more. Accurate conversions for different systems and standards." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/volume-converter" />
      </Helmet>

      <Converter
        description="This toolbox provides you with a completely FREE volume converter including the International System of Units (SI), the US liquid and dry systems, and the UK system. For more information about the data used for converting, scroll down and check under the converter."
        systems={["SI", "USLiquid", "USDry", "UK", "All"]}
        units={units}
        unitValues={unitValues}
      />

      <div className="p-6 pt-0">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-700">
            To use the volume converter, select the units you want to convert from and to, then input the value you wish to convert. The tool will instantly display the converted volume in the selected units. Our converter supports a wide range of volume units including metric units like cubic
            meters and liters, as well as various liquid and dry units used in the US and UK systems. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
          </p>
          <h3 className="mt-4 font-semibold text-gray-900">Common Units of Volume</h3>
          <p className="text-gray-700">
            - <strong>Cubic Meter (m³):</strong> The standard unit of volume in the International System of Units (SI). Used for large volumes.
            <br />- <strong>Cubic Centimeter (cm³):</strong> A metric unit of volume equal to one millionth of a cubic meter, commonly used for smaller volumes.
            <br />- <strong>Cubic Millimeter (mm³):</strong> A metric unit of volume used for very small volumes.
            <br />- <strong>Teaspoon (tsp):</strong> A small unit of volume used primarily in cooking and medicine.
            <br />- <strong>Tablespoon (tbsp):</strong> A larger unit of volume commonly used in cooking, equivalent to three teaspoons.
            <br />- <strong>Fluid Ounce (fl oz):</strong> A unit of volume used in the US and UK for liquid measurements.
            <br />- <strong>Cup:</strong> A common unit of volume used in cooking, typically used to measure larger liquid volumes.
            <br />- <strong>Pint (pt):</strong> A unit of volume used in the US and UK, equal to 16 fluid ounces in the US and 20 fluid ounces in the UK.
            <br />- <strong>Quart (qt):</strong> A unit of volume equal to four pints.
            <br />- <strong>Gallon (gal):</strong> A large unit of volume used for liquid measurements, equal to four quarts in the US and approximately 4.546 liters in the UK.
            <br />- <strong>Dry Pint:</strong> A unit of volume used for dry measurements in the US, different from the liquid pint.
            <br />- <strong>Dry Quart:</strong> A unit of volume equal to four dry pints.
            <br />- <strong>Dry Gallon:</strong> A unit of volume used for dry measurements, equal to four dry quarts.
            <br />- <strong>Gill:</strong> A unit of volume used in the UK, equal to half a pint.
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-900">What is the difference between US liquid and dry volume units?</h3>
            <p className="text-gray-600">
              US liquid and dry volume units are used for different types of measurements. Liquid units (like fluid ounces, cups, and gallons) measure the volume of liquids, while dry units (like dry pints and dry gallons) are used for measuring dry goods. They are not interchangeable due to
              differences in density and measurement standards.
            </p>
            <h3 className="mt-4 font-semibold text-gray-900">Why are there different volume units in the US and UK systems?</h3>
            <p className="text-gray-600">
              The US and UK systems have different volume units due to historical differences in measurement standards. For example, the US gallon is slightly different from the UK gallon. The UK system also includes units like the gill, which is not commonly used in the US.
            </p>
            <h3 className="mt-4 font-semibold text-gray-900">How can I convert between metric and US/UK volume units?</h3>
            <p className="text-gray-600">To convert between metric and US/UK volume units, use the provided conversion factors. For instance, 1 cubic meter is approximately 264.172 gallons (US) or 219.969 gallons (UK). You can use our converter tool to perform these conversions accurately.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volume;
