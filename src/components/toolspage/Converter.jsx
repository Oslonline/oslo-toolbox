import { useEffect, useState } from "react";
import DropdownInput from "../ui/DropdownInput";

function Converter({ systems, units, unitValues }) {
  const [metricSys, setMetricSys] = useState("All");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [unitFrom, setUnitFrom] = useState(units["All"][1]);
  const [unitTo, setUnitTo] = useState(units["All"][2]);
  const [error, setError] = useState("");

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
    if (isNaN(value)) {
      setError("Please enter a valid number");
    } else {
      setError("");
      setInputValue(value);
      convertUnits(value, unitFrom, unitTo);
    }
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
      setResult(result.toFixed(2));
    }

    setResult(result.toFixed(2));
  };

  return (
    <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex rounded-lg border-2 p-4">
      <div className="flex w-full flex-col gap-3">
        <span className="flex items-center gap-2">
          <p>Metric System :</p>
          <DropdownInput
            id="metric-system"
            value={metricSys}
            onChange={(e) => handleMetricSysChange(e.target.value)}
            options={systems}
            className="w-fit"
          />
        </span>
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="flex flex-col gap-3">
            <input className={`dark:border-border-dark border-border-light rounded-md border p-2 focus:outline-none ${error ? "ring-2 ring-red-500" : ""}`} placeholder="Input" type="text" value={inputValue} onChange={handleInputChange} />
            {error && <p className="text-red-500">{error}</p>}
            <div className="block">
              <DropdownInput
                id="unit-from"
                value={unitFrom}
                onChange={(e) => handleUnitFromChange(e.target.value)}
                options={units[metricSys]}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <input className="dark:border-border-dark border-border-light rounded-md border p-2 outline-hidden hover:cursor-default" type="text" placeholder="Output" value={result} readOnly />
            <div className="block">
              <DropdownInput
                id="unit-to"
                value={unitTo}
                onChange={(e) => handleUnitToChange(e.target.value)}
                options={units[metricSys]}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Converter;
