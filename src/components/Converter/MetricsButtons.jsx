import React from "react";

function MetricButtons({ units, selectedUnit, onChange }) {
    return (
        <div className="flex h-fit max-h-56 flex-col gap-2 overflow-y-auto rounded-md border-2 border-gray-200 bg-white px-4 py-2">
            {units.map((unitName, index) => (
                <button key={index} className={`rounded-md p-1 hover:bg-gray-200 ${selectedUnit === unitName ? "bg-orange-400 text-gray-50 hover:bg-orange-400" : ""}`} onClick={() => onChange(unitName)}>
                    {unitName}
                </button>
            ))}
        </div>
    );
}

export default MetricButtons;
