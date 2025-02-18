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
    <nav className="border-border-light dark:border-border-dark text-text-border-light dark:text-text-border-dark mb-0.5 hidden items-center space-x-1 rounded-sm border px-1 py-[1px] text-xs md:flex xl:text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.segment}>
          {index === 0 ? (
            <Link to={breadcrumb.url} className="hover:underline">
              {breadcrumb.segment}
            </Link>
          ) : (
            <span>{breadcrumb.segment}</span>
          )}
          {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
