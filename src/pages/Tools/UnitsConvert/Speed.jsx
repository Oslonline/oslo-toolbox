import React from "react";
import Converter from "../../../components/converters/Converter";
import { Helmet } from "react-helmet";

function Speed() {
  const units = {
    SI: ["Metre per Second (m/s)", "Kilometre per Hour (km/h)", "Centimetre per Second (cm/s)", "Millimetre per Second (mm/s)", "Kilometre per Second (km/s)"],
    US: ["Mile per Hour (mph)", "Foot per Second (ft/s)", "Inch per Second (in/s)", "Knot (kn)", "Mile per Minute (mpm)", "Mile per Second (mps)"],
    Others: ["Speed of Light (c)", "Mach (at sea level)", "Knot (UK)", "Yard per Second (yd/s)", "Speed of Sound"],
    All: [
      "Metre per Second (m/s)",
      "Kilometre per Hour (km/h)",
      "Centimetre per Second (cm/s)",
      "Millimetre per Second (mm/s)",
      "Kilometre per Second (km/s)",
      "Mile per Hour (mph)",
      "Foot per Second (ft/s)",
      "Inch per Second (in/s)",
      "Knot (kn)",
      "Mile per Minute (mpm)",
      "Mile per Second (mps)",
      "Speed of Light (c)",
      "Mach (at sea level)",
      "Knot (UK)",
      "Yard per Second (yd/s)",
      "Speed of Sound",
    ],
  };

  const unitValues = {
    "Metre per Second (m/s)": 1,
    "Kilometre per Hour (km/h)": 0.277778,
    "Centimetre per Second (cm/s)": 0.01,
    "Millimetre per Second (mm/s)": 0.001,
    "Kilometre per Second (km/s)": 1000,
    "Mile per Hour (mph)": 0.44704,
    "Foot per Second (ft/s)": 0.3048,
    "Inch per Second (in/s)": 0.0254,
    "Knot (kn)": 0.514444,
    "Mile per Minute (mpm)": 26.8224,
    "Mile per Second (mps)": 1609.34,
    "Speed of Light (c)": 299792458,
    "Mach (at sea level)": 343,
    "Knot (UK)": 0.514774,
    "Yard per Second (yd/s)": 0.9144,
    "Speed of Sound": 343,
  };

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Speed Converter - Convert Units of Speed | Oslo Toolbox</title>
        <meta name="description" content="Free speed converter tool to convert between different units of speed including metric, imperial, and other systems. Get accurate conversions for units like meters per second, miles per hour, knots, and more." />
        <meta name="keywords" content="speed converter, unit converter, convert speed, meters per second, miles per hour, knots, metric units, imperial units, speed of light, mach, km/h, mph" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Speed" />
      </Helmet>

      <Converter
        description="This toolbox provides you a completely FREE speed converter including the international system of units & the imperial system of units with US, UK & other units. For more info about the data used for converting, scroll down and check under the converter."
        systems={["SI", "US", "Others", "All"]}
        units={units}
        unitValues={unitValues}
      />

      <div className="p-6 pt-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
          <p className="text-gray-700 dark:text-gray-400">
            To use the speed converter, select the units you want to convert from and to, and input the value you wish to convert. The tool will instantly display the converted value in the selected units. Our converter supports a wide range of units including metric units like meters per second and
            imperial units like miles per hour. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
          </p>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Units of Speed</h3>
          <p className="text-gray-700 dark:text-gray-400">
            - <strong>Metre per Second (m/s):</strong> The standard unit of speed in the International System of Units (SI). Used globally for most speed measurements.
            <br />- <strong>Mile per Hour (mph):</strong> A unit of speed commonly used in the United States and the UK, particularly for measuring vehicle speeds.
            <br />- <strong>Kilometre per Hour (km/h):</strong> A metric unit of speed commonly used worldwide, especially on road signs.
            <br />- <strong>Knot (kn):</strong> A unit of speed used primarily in maritime and aviation contexts, equivalent to one nautical mile per hour.
            <br />- <strong>Foot per Second (ft/s):</strong> A unit of speed used in some engineering contexts.
            <br />- <strong>Speed of Light (c):</strong> The ultimate speed limit in the universe, used in physics and astronomy.
            <br />- <strong>Mach:</strong> A unit representing the speed relative to the speed of sound, used in aeronautics.
            <br />- <strong>Yard per Second (yd/s):</strong> A less common unit of speed used in specific contexts.
            <br />- <strong>Speed of Sound:</strong> The speed at which sound waves propagate through a medium, typically air at sea level.
            <br />- <strong>Centimetre per Second (cm/s):</strong> A metric unit of speed used for very small-scale measurements.
            <br />- <strong>Millimetre per Second (mm/s):</strong> A metric unit of speed used in precise measurements.
            <br />- <strong>Kilometre per Second (km/s):</strong> A metric unit of speed used for very high-speed measurements.
            <br />- <strong>Mile per Minute (mpm):</strong> A unit of speed used in some specific contexts, primarily in aviation.
            <br />- <strong>Mile per Second (mps):</strong> A unit of speed used for extremely high-speed measurements.
            <br />
          </p>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">FAQ</h2>
          <div className="mt-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">What if I need to convert a unit not listed here?</h3>
            <p className="text-gray-600 dark:text-gray-400">If you need to convert a unit not listed in this converter, please contact us with the details. We may be able to add more units based on user requests and the availability of accurate conversion factors.</p>
            <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Are there units with specific regional usage?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, some units such as the "Knot (UK)" or "Yard per Second (yd/s)" are specific to certain regions or historical contexts. If you have any questions about these units, feel free to ask !</p>
            <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">How can I ensure the conversion results are correct?</h3>
            <p className="text-gray-600 dark:text-gray-400">We use accurate conversion factors based on standard references. However, for specific applications, we recommend cross-referencing the results with other reliable sources or standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speed;
