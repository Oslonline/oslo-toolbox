import React, { useEffect, useState } from "react";
import MetricButtons from "./MetricsButtons";
import { FaArrowRight } from "react-icons/fa";

function Converter({ title, description, systems, units, unitValues }) {
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
    <div className="flex flex-col gap-7 p-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-gray-800">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex flex-col gap-5 rounded-md border-2 border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center gap-2">
          <div>
            <h3 className="font-semibold text-gray-500">Metric System :</h3>
          </div>
          <div>
            <select className="rounded-md px-3 py-2 hover:cursor-pointer" value={metricSys} onChange={(e) => handleMetricSysChange(e.target.value)}>
              {systems.map((sys) => (
                <option key={sys} value={sys}>
                  {sys}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-md border-2 border-gray-200 bg-white p-4">
          <div>
            <h3 className="font-semibold text-gray-500">Conversion :</h3>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <input className="rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400 focus:outline-offset-0" placeholder="3.46" type="text" value={inputValue} onChange={handleInputChange} />
              <MetricButtons units={units[metricSys]} selectedUnit={unitFrom} onChange={handleUnitFromChange} />
            </div>
            <div className="pt-2">
              <FaArrowRight />
            </div>
            <div className="flex flex-col gap-3">
              <input className="rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none" type="text" value={result} readOnly />
              <MetricButtons units={units[metricSys]} selectedUnit={unitTo} onChange={handleUnitToChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;
