import React from "react";
import ToolsCard from "../../components/Homepages/ToolsCard";

const cssTools = [
  {
    name: "Gradient generator",
    link: "/Css/Gradient",
    text: "",
    icon: "/images/css-tools/gradient.webp",
  },
  {
    name: "Box-shadow generator",
    link: "/Css/Box-shadow",
    text: "",
    icon: "/images/css-tools/shadow.webp",
  },
];

function HomeCss() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Discover all our CSS generators tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cssTools.map((tool, index) => (
          <ToolsCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default HomeCss;
