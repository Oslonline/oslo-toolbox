import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const path = useLocation().pathname;
  const segments = path.split("/").filter((segment) => segment);

  if (segments.length === 0) {
    return null;
  }

  const breadcrumbs = [
    { segment: "Home", url: "/" },
    ...segments.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join("/")}`;
      return { segment, url };
    }),
  ];

  return (
    <nav className="mb-0.5 hidden items-center space-x-1 rounded border border-gray-200 px-1 py-0.5 text-sm text-gray-400 dark:text-gray-600 md:flex dark:border-gray-800 ">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.segment}>
          {index === breadcrumbs.length - 1 ? (
            <span>{breadcrumb.segment}</span>
          ) : (
            <Link to={breadcrumb.url} className="hover:underline">
              {breadcrumb.segment}
            </Link>
          )}
          {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
