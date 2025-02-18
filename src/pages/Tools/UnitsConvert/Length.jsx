import { Helmet } from "react-helmet";
import Converter from "../../../components/toolspage/Converter";
import FAQSection from "../../../components/Faq";

function Length() {
  const units = {
    SI: ["Kilometre", "Metre", "Centimetre", "Millimetre", "Micrometre", "Nanometre"],
    US: ["Nautical mile", "Mile", "Furlong", "Rod", "Fathom", "Yard", "Foot", "Inch"],
    All: ["Kilometre", "Metre", "Centimetre", "Millimetre", "Micrometre", "Nanometre", "Nautical mile", "Mile", "Furlong", "Rod", "Fathom", "Yard", "Foot", "Inch"],
  };

  const unitValues = {
    Kilometre: 1000,
    Metre: 1,
    Centimetre: 0.01,
    Millimetre: 0.001,
    Micrometre: 0.000001,
    Nanometre: 0.000000001,
    "Nautical mile": 1852,
    Mile: 1609,
    Furlong: 201,
    Rod: 5.029,
    Fathom: 1.829,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
  };

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Length Converter - Convert Units of Length | Oslo Toolbox</title>
        <meta name="description" content="Free length converter tool to convert between different units of length including metric and imperial systems. Convert between kilometers, meters, miles, and more with ease." />
        <meta name="keywords" content="length converter, unit converter, convert length, kilometers, meters, miles, inches, feet, metric units, imperial units, distance measurement, length conversion tool" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Length" />
      </Helmet>

      <Converter
        description="This toolbox provides you a completely FREE length converter including the international system of units & the imperial system of units with US & UK units. For more information about the data used for converting, scroll down and check under the converter."
        systems={["All", "SI", "US"]}
        units={units}
        unitValues={unitValues}
      />

      <div>
        <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
        <p className="text-gray-700 dark:text-gray-400">
          To use the length converter, select the units you want to convert from and to, and input the value you wish to convert. The tool will instantly display the converted value in the selected units. Our converter supports a wide range of units including metric units like meters and imperial
          units like miles. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
        </p>
        <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Units of Length</h3>
        <p className="text-gray-700 dark:text-gray-400">
          - <strong>Kilometre (km):</strong> The metric unit of length equal to 1,000 meters. Commonly used for measuring larger distances.
          <br />- <strong>Metre (m):</strong> The base unit of length in the International System of Units (SI). Used globally for most length measurements.
          <br />- <strong>Centimetre (cm):</strong> A metric unit of length equal to 0.01 meters. Used for smaller measurements.
          <br />- <strong>Millimetre (mm):</strong> A metric unit of length equal to 0.001 meters. Used for very small measurements.
          <br />- <strong>Micrometre (µm):</strong> A metric unit of length equal to 0.000001 meters. Used in scientific measurements.
          <br />- <strong>Nanometre (nm):</strong> A metric unit of length equal to 0.000000001 meters. Used in nanotechnology.
          <br />- <strong>Nautical mile:</strong> A unit of length used in maritime and air navigation, equal to 1,852 meters.
          <br />- <strong>Mile:</strong> A unit of length used primarily in the United States and the UK, equal to 1,609 meters.
          <br />- <strong>Furlong:</strong> A unit of length used in horse racing, equal to 201 meters.
          <br />- <strong>Rod:</strong> A unit of length used in land measurement, equal to 5.029 meters.
          <br />- <strong>Fathom:</strong> A unit of length used in nautical contexts, equal to 1.829 meters.
          <br />- <strong>Yard:</strong> A unit of length used in the United States and the UK, equal to 0.9144 meters.
          <br />- <strong>Foot:</strong> A unit of length used in the United States and the UK, equal to 0.3048 meters.
          <br />- <strong>Inch:</strong> A unit of length used in the United States and the UK, equal to 0.0254 meters.
        </p>
      </div>
      <FAQSection />
    </div>
  );
}

export default Length;
