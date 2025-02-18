import { Helmet } from "react-helmet";
import Converter from "../../../components/toolspage/Converter";
import FAQSection from "../../../components/Faq";

function Volume() {
  const units = {
    All: ["Cubic meter", "Cubic centimeter", "Cubic millimeter", "Teaspoon", "Tablespoon", "Fluid ounce", "Cup", "Pint", "Quart", "Gallon", "Dry pint", "Dry quart", "Dry gallon", "Gill"],
    SI: ["Cubic meter", "Cubic centimeter", "Cubic millimeter"],
    USLiquid: ["Teaspoon", "Tablespoon", "Fluid ounce", "Cup", "Pint", "Quart", "Gallon"],
    USDry: ["Dry pint", "Dry quart", "Dry gallon"],
    UK: ["Fluid ounce", "Gill", "Pint", "Quart", "Gallon"],
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
        <title>Volume Converter - Convert Volume Units | Oslo Toolbox</title>
        <meta name="description" content="Free volume converter tool to convert between various units of volume including cubic meters, liters, teaspoons, tablespoons, and more. Accurate conversions for different systems and standards." />
        <meta name="keywords" content="volume converter, convert volume, cubic meter, liter, teaspoon, tablespoon, gallon, cup, pint, quart, fluid ounce, dry gallon, volume units" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Volume" />
      </Helmet>

      <Converter
        description="This toolbox provides you with a completely FREE volume converter that includes the International System of Units (SI), the US liquid and dry systems, and the UK system. For more information about the data used for converting, scroll down and check under the converter."
        systems={["SI", "USLiquid", "USDry", "UK", "All"]}
        units={units}
        unitValues={unitValues}
      />

      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
        <p className="text-gray-700 dark:text-gray-400">
          To use the volume converter, select the units you want to convert from and to, then input the value you wish to convert. The tool will instantly display the converted volume in the selected units. Our converter supports a wide range of volume units including metric units like cubic meters
          and liters, as well as various liquid and dry units used in the US and UK systems. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
        </p>
        <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Units of Volume</h3>
        <p className="text-gray-700 dark:text-gray-400">
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
      <FAQSection />
    </div>
  );
}

export default Volume;
