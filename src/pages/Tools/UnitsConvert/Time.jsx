import React from "react";
import Converter from "../../../components/converters/Converter";
import FAQSection from "../../../components/commons/Faq";
import { Helmet } from "react-helmet";

function Time() {
  const units = {
    SI: ["Second (s)", "Minute (min)", "Hour (h)", "Day (d)", "Week (wk)", "Month (mo)", "Year (yr)"],
    Others: ["Jiffy", "Millisecond (ms)", "Microsecond (µs)", "Nanosecond (ns)", "Picosecond (ps)", "Shake"],
    All: ["Second (s)", "Minute (min)", "Hour (h)", "Day (d)", "Week (wk)", "Month (mo)", "Year (yr)", "Jiffy", "Millisecond (ms)", "Microsecond (µs)", "Nanosecond (ns)", "Picosecond (ps)", "Shake"],
  };

  const unitValues = {
    "Second (s)": 1,
    "Minute (min)": 60,
    "Hour (h)": 3600,
    "Day (d)": 86400,
    "Week (wk)": 604800,
    "Month (mo)": 2628000,
    "Year (yr)": 31536000,
    Jiffy: 1 / 60,
    "Millisecond (ms)": 0.001,
    "Microsecond (µs)": 0.000001,
    "Nanosecond (ns)": 0.000000001,
    "Picosecond (ps)": 0.000000000001,
    Shake: 1 / 10 ** 8,
  };

  const faqData = [
    {
      question: "What if I need to convert a unit not listed here?",
      answer: "If you need to convert a unit not listed in this converter, please contact us with the details. We may be able to add more units based on user requests and the availability of accurate conversion factors.",
    },
    {
      question: "Are there units with specific regional usage?",
      answer: "Yes, some units like 'Shake' or 'Jiffy' are used in specific contexts. If you have any questions about these units, feel free to ask!",
    },
    {
      question: "How can I ensure the conversion results are correct?",
      answer: "We use accurate conversion factors based on standard references. However, for specific applications, we recommend cross-referencing the results with other reliable sources or standards.",
    },
  ];

  return (
    <div className="flex flex-col gap-7">
      <Helmet>
        <title>Time Converter - Convert Units of Time | Oslo Toolbox</title>
        <meta name="description" content="Free time converter tool to convert between different units of time including seconds, minutes, hours, days, and more. Get accurate conversions for units like milliseconds, microseconds, and jiffies." />
        <meta name="keywords" content="time converter, unit converter, convert time, seconds, minutes, hours, milliseconds, microseconds, jiffy, picosecond, shake" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/UnitsConvert/Time" />
      </Helmet>

      <Converter
        description="This toolbox provides you a completely FREE time converter including standard units like seconds and minutes, as well as specialized units such as milliseconds and jiffies. For more info about the data used for converting, scroll down and check under the converter."
        systems={["SI", "Others", "All"]}
        units={units}
        unitValues={unitValues}
      />

      <div className="p-6 pt-0">
        <div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">How It Works</h2>
          <p className="text-gray-700 dark:text-gray-400">
            To use the time converter, select the units you want to convert from and to, and input the value you wish to convert. The tool will instantly display the converted value in the selected units. Our converter supports a wide range of units including standard units like seconds and minutes,
            as well as specialized units like milliseconds and jiffies. For detailed conversions, you can also check the specific values used in the tool by scrolling down.
          </p>
          <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">Common Units of Time</h3>
          <p className="text-gray-700 dark:text-gray-400">
            - <strong>Millisecond (ms):</strong> A unit of time equal to 0.001 seconds.
            <br />- <strong>Microsecond (µs):</strong> A unit of time equal to 0.000001 seconds.
            <br />- <strong>Nanosecond (ns):</strong> A unit of time equal to 0.000000001 seconds.
            <br />- <strong>Picosecond (ps):</strong> A unit of time equal to 0.000000000001 seconds.
            <br />- <strong>Second (s):</strong> The base unit of time in the International System of Units (SI).
            <br />- <strong>Minute (min):</strong> A unit of time equal to 60 seconds.
            <br />- <strong>Hour (h):</strong> A unit of time equal to 3600 seconds.
            <br />- <strong>Day (d):</strong> A unit of time equal to 86400 seconds.
            <br />- <strong>Week (wk):</strong> A unit of time equal to 604800 seconds.
            <br />- <strong>Month (mo):</strong> An approximate unit of time equal to 2628000 seconds.
            <br />- <strong>Year (yr):</strong> A unit of time equal to 31536000 seconds.
            <br />- <strong>Jiffy:</strong> An informal unit of time, approximately 1/60th of a second.
            <br />- <strong>Shake:</strong> A unit of time equal to 10 nanoseconds.
            <br />
          </p>
        </div>
        <FAQSection faqs={faqData} />
      </div>
    </div>
  );
}

export default Time;
