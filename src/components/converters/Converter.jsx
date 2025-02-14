import React, { useEffect, useState } from "react";
import MetricButtons from "./MetricsButtons";
import { FaArrowRight } from "react-icons/fa";

function Converter({ description, systems, units, unitValues }) {
  const [metricSys, setMetricSys] = useState("All");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [unitFrom, setUnitFrom] = useState(units["All"][1]);
  const [unitTo, setUnitTo] = useState(units["All"][2]);

  useEffect(() => {
    handleMetricSysChange(metricSys);
  }, [metricSys]);

  const handleMetricSysChange = (selectedMetricSys) => {
    setMetricSys(selectedMetricSys);
    setUnitFrom(units[selectedMetricSys][1]);
    setUnitTo(units[selectedMetricSys][2]);
    convertUnits(inputValue, units[selectedMetricSys][1], units[selectedMetricSys][2]);
  };

  const handleUnitFromChange = (selectedUnit) => {
    setUnitFrom(selectedUnit);
    convertUnits(inputValue, selectedUnit, unitTo);
  };

  const handleUnitToChange = (selectedUnit) => {
    setUnitTo(selectedUnit);
    convertUnits(inputValue, unitFrom, selectedUnit);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    convertUnits(value, unitFrom, unitTo);
  };

  const convertUnits = (value, from, to) => {
    if (value === "" || value == null) {
      setResult("");
      return;
    }

    let result;
    if (unitValues[from] && unitValues[from][to]) {
      result = unitValues[from][to](parseFloat(value));
    } else {
      result = (parseFloat(value) * unitValues[from]) / unitValues[to];
      setResult(result.toFixed(15));
    }

    setResult(result.toFixed(15));
  };

  return (
    <div className="flex flex-col gap-7 p-4 pb-0 md:p-6 md:pb-0">
      <div className="flex flex-col gap-4">
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex flex-col gap-5 rounded-md p-0 md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
        <div className="flex items-center gap-2">
          <div>
            <h3 className="font-semibold text-gray-500 dark:text-gray-400">Metric System :</h3>
          </div>
          <div>
            <select className="rounded-md px-3 py-2 hover:cursor-pointer dark:bg-gray-800" value={metricSys} onChange={(e) => handleMetricSysChange(e.target.value)}>
              {systems.map((sys) => (
                <option key={sys} value={sys}>
                  {sys}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <div>
            <h3 className="font-semibold text-gray-500 dark:text-gray-400">Conversion :</h3>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="flex flex-col gap-3">
              <input
                className="rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-hidden focus:border-orange-400 focus:outline-offset-0 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:caret-orange-600 dark:focus:border-orange-600"
                placeholder="3.46"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="hidden md:block">
                <MetricButtons units={units[metricSys]} selectedUnit={unitFrom} onChange={handleUnitFromChange} />
              </div>
              <div className="block md:hidden">
                <select className="w-full rounded-md border-2 border-gray-200 bg-white p-2" value={unitFrom} onChange={(e) => handleUnitFromChange(e.target.value)}>
                  {units[metricSys].map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex w-fit rotate-90 md:mt-3 md:rotate-0 dark:text-gray-400">
              <FaArrowRight />
            </div>
            <div className="flex flex-col gap-3">
              <input className="rounded-md border-2 border-gray-200 bg-white p-2 outline-hidden dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50" type="text" value={result} readOnly />
              <div className="hidden md:block">
                <MetricButtons units={units[metricSys]} selectedUnit={unitTo} onChange={handleUnitToChange} />
              </div>
              <div className="block md:hidden">
                <select className="w-full rounded-md border-2 border-gray-200 bg-white p-2" value={unitTo} onChange={(e) => handleUnitToChange(e.target.value)}>
                  {units[metricSys].map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;
