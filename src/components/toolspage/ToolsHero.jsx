import React from "react";
import { useLocation } from "react-router-dom";
import tools from "../../data/toolsData";

export default function ToolsHero() {
  const location = useLocation();
  const currentPath = location.pathname;

  let toolInfo = null;
  for (const category of tools) {
    toolInfo = category.tools.find((tool) => tool.link === currentPath);
    if (toolInfo) break;
  }

  if (!toolInfo) {
    return <div>Tool not found</div>;
  }

  return (
    <div className="mt-4 flex w-full flex-col gap-2">
      <div className="flex items-end gap-2">
        <span className="text-accent border-accent/40 from-accent/30 rounded border-2 bg-linear-to-t to-transparent p-2 text-lg lg:text-2xl xl:text-4xl">{React.createElement(toolInfo.icon)}</span>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">{toolInfo.hero.title}</h1>
      </div>
      <h2 className="dark:text-text-border-light text-text-border-dark font-mono text-sm">{toolInfo.hero.description}</h2>
    </div>
  );
}
