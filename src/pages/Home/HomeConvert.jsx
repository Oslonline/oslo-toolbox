import React from "react";
import ToolsCard from "../../components/Homepages/ToolsCard";

const unitsConvertTools = [
  {
    name: "Mass units converter",
    link: "/UnitsConvert/Mass",
    text: "",
    icon: "/images/units-convert-tools/mass.png",
  },
  {
    name: "Length units converter",
    link: "/UnitsConvert/Length",
    text: "",
    icon: "/images/units-convert-tools/length.png",
  },
  {
    name: "Area units converter",
    link: "/UnitsConvert/Area",
    text: "",
    icon: "/images/units-convert-tools/area.png",
  },
  {
    name: "Volume units converter",
    link: "/UnitsConvert/Volume",
    text: "",
    icon: "/images/units-convert-tools/volume.png",
  },
  {
    name: "Temperature units converter",
    link: "/UnitsConvert/Temperature",
    text: "",
    icon: "/images/units-convert-tools/temperature.png",
  },
];

function HomeConvert() {
  return (
    <div className="flex flex-col gap-9 p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Discover all our Units converters tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {unitsConvertTools.map((tool, index) => (
          <ToolsCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default HomeConvert;
