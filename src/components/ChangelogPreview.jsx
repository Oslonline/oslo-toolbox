import changelog from "../data/changelog";
import { Link } from "react-router-dom";

const ChangelogPreview = () => {
  const latestEntry = changelog[changelog.length - 1];

  return (
    <Link className="relative" to={"/changelogs"}>
      <div className="border-border-light from-accent/0 hover:from-accent/40 group dark:border-border-dark max-w-84 rounded border bg-gradient-to-tl via-transparent to-transparent p-2 font-mono whitespace-nowrap transition duration-150 hover:opacity-70">
        <p className="text-lg font-semibold">
          v{latestEntry.version} - {latestEntry.date}
        </p>
        <div className="pl-4">
          {latestEntry.majorChanges.length > 0 && (
            <>
              <p className="text-border-dark dark:text-border-light font-semibold">Major Changes</p>
              <ul className="list-inside list-disc text-sm text-stone-600 dark:text-stone-400">
                {latestEntry.majorChanges.slice(0, 1).map((change, changeIndex) => (
                  <li className="truncate" key={changeIndex}>
                    <strong>{change.title}</strong>: {change.description}
                  </li>
                ))}
                {latestEntry.majorChanges.length > 1 && <li>and more...</li>}
              </ul>
            </>
          )}
          {latestEntry.minorChanges.filter((change) => change.description.trim() !== "").length > 0 && (
            <>
              <p className="text-border-dark dark:text-border-light font-semibold">Minor Changes</p>
              <ul className="list-inside list-disc text-sm text-stone-600 dark:text-stone-400">
                {latestEntry.minorChanges
                  .filter((change) => change.description.trim() !== "")
                  .slice(0, 2)
                  .map((change, changeIndex) => (
                    <li className="truncate" key={changeIndex}>
                      <strong>{change.title}</strong>: {change.description}
                    </li>
                  ))}
                {latestEntry.minorChanges.filter((change) => change.description.trim() !== "").length > 2 && <li>and more...</li>}
              </ul>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChangelogPreview;
