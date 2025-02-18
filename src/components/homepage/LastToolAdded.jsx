import React from "react";
import { Link } from "react-router-dom";
import tools from "../../data/toolsData";

const LastToolAdded = () => {
  const newTools = [];

  for (const category of tools) {
    for (const tool of category.tools) {
      if (tool.new) {
        newTools.push(tool);
      }
    }
  }

  return (
    <div className="flex flex-col justify-between gap-4 rounded-lg p-4">
      <h4 className="text-xl font-bold">Last Tools Added</h4>
      <div className="flex flex-col gap-4 md:flex-row">
        {newTools.length > 0 ? (
          newTools.map((tool, index) => (
            <Link
              key={index}
              to={tool.link}
              className="dark:bg-text-base dark:border-text-base border-text-dark hover:border-accent from-accent/0 hover:from-accent/10 bg-text-dark flex max-w-md flex-col justify-center gap-1 rounded-lg border bg-gradient-to-bl to-transparent p-4 hover:cursor-pointer hover:transition hover:duration-200 lg:gap-2 xl:p-5"
            >
              <div className="flex items-end gap-2">
                <span className="text-accent border-accent/40 from-accent/30 rounded border-2 bg-linear-to-t to-transparent p-2 text-lg lg:text-2xl">{React.createElement(tool.icon)}</span>
                <p className="font-mono text-lg font-semibold lg:text-xl xl:text-2xl">{tool.name}</p>
              </div>
              <p className="line-clamp-2 text-sm text-stone-600 dark:text-stone-400">{tool.description}</p>
              <span className="absolute top-2 right-2"></span>
            </Link>
          ))
        ) : (
          <p className="text-stone-600 dark:text-stone-400">No new tools added.</p>
        )}
      </div>
    </div>
  );
};

export default LastToolAdded;
