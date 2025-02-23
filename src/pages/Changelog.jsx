import React from "react";
import changelog from "../data/changelog";
import { format } from "date-fns";

export default function Changelog() {
  return (
    <div className="md:p-6 lg:w-11/12 xl:w-10/12">
      <h1 className="text-2xl font-bold">Changelogs</h1>
      <h2 className="text-text-border-dark dark:text-text-border-light">All major & minor changes that directly impact the user experience are referenced here to keep you updated about the last tools added, last bugs fixed, last improvements...</h2>
      <div className="flex flex-col gap-8 md:pl-4 xl:gap-12">
        {changelog
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((entry, index) => (
            <div key={index} className="border-border-light dark:border-border-dark flex flex-col gap-8 pt-8 md:flex-row md:gap-18 xl:pt-12 [&:not(:first-child)]:border-t">
              <span className="md:w-60 xl:w-72 2xl:w-80">
                <h3 className="text-xl font-semibold">
                  v{entry.version} - {entry.title}
                </h3>
                <p className="text-text-border-dark dark:text-text-border-light text-sm">{format(new Date(entry.date), "MMMM d, yyyy")}</p>
              </span>
              <div className="flex w-full flex-col gap-4">
                {entry.majorChanges.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold">Major Changes</h4>
                    <ul className="ml-2 list-inside list-disc text-stone-700 dark:text-stone-300">
                      {entry.majorChanges.map((change, changeIndex) => (
                        <li className="mt-2" key={changeIndex}>
                          <strong>{change.title}</strong>: {change.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {entry.minorChanges.filter((change) => change.description.trim() !== "").length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold">Minor Changes</h4>
                    <ul className="ml-2 list-inside list-disc text-stone-700 dark:text-stone-300">
                      {entry.minorChanges
                        .filter((change) => change.description.trim() !== "")
                        .map((change, changeIndex) => (
                          <li className="mt-2" key={changeIndex}>
                            <strong>{change.title}</strong>: {change.description}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
