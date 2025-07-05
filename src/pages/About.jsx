import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet";
import tools from "../data/toolsData";

function About() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="flex flex-col md:p-6 lg:w-11/12 xl:w-10/12">
      <Helmet>
        <title>About Oslo's Toolbox - Free Online Developer Tools</title>
        <meta name="description" content="Learn about Oslo's Toolbox, an open-source project offering free online tools for developers and designers. Discover our mission, features, and how to contribute." />
        <meta name="keywords" content="about oslo toolbox, open source tools, developer tools, contribute, free online tools" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/about" />
        <meta property="og:title" content="About Oslo's Toolbox" />
        <meta property="og:description" content="Open-source suite of free online tools for developers and designers. Learn more about our mission and features." />
        <meta property="og:url" content="https://oslo-toolbox.vercel.app/about" />
        <meta name="twitter:title" content="About Oslo's Toolbox" />
        <meta name="twitter:description" content="Open-source suite of free online tools for developers and designers. Learn more about our mission and features." />
      </Helmet>
      <div className="flex flex-col gap-6 lg:gap-8 xl:gap-12">
        {/* About */}
        <div>
          <h1 className="mb-2 font-serif text-3xl font-bold">About Oslo's Toolbox</h1>
          <p className="text-text-border-dark dark:text-text-border-light">
            <strong>Oslo's Toolbox</strong> is an <strong>open-source</strong> collection of handy tools and utilities available for free online. This project is maintained by{" "}
            <Link className="text-accent underline" to={"https://github.com/Oslonline"}>
              Oslo418
            </Link>{" "}
            and welcomes{" "}
            <Link className="text-accent underline" to={"https://github.com/Oslonline/oslo-toolbox"}>
              contributions
            </Link>{" "}
            from the community. Our goal is to provide a comprehensive suite of tools that assist developers, designers, and anyone looking to streamline their workflow.
          </p>
        </div>
        {/* Features */}
        <div>
          <h2 className="mb-2 font-serif text-3xl font-bold">Features list</h2>
          <div className="flex flex-col gap-4">
            {tools.map((category) => (
              <div key={category.name} className="dark:border-border-dark border-border-light rounded border">
                <button className="dark:border-border-dark hover:bg-border-light dark:hover:bg-border-dark border-border-light flex w-full items-center justify-between p-2 text-left font-semibold duration-150 hover:cursor-pointer" onClick={() => toggleCategory(category.name)}>
                  {category.name}
                  <FaChevronDown className={`transform transition-transform duration-200 ${expandedCategory === category.name ? "rotate-180" : ""}`} />
                </button>
                {expandedCategory === category.name && (
                  <div className="dark:border-border-dark border-border-light flex flex-col gap-2 border-t p-2">
                    {category.tools.map((tool) => (
                      <Link className="dark:hover:bg-border-dark hover:bg-border-light rounded p-1" to={tool.link}>
                        <span className="flex items-center gap-2 font-mono">
                          {React.createElement(tool.icon)}
                          {tool.name}
                        </span>
                        <p className="text-text-border-dark dark:text-text-border-light text-sm">{tool.description}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Changelogs */}
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-3xl font-bold">Changelogs</h3>
          <div className="flex flex-col gap-4">
            <div className="text-text-border-dark dark:text-text-border-light">
              <p>Since the release of version 2 of our UI, we have introduced changelogs directly on the website to keep you updated with the latest changes and updates.</p>
              <p>
                You can go to{" "}
                <Link className="text-accent underline" to="/changelogs">
                  the changelog page
                </Link>{" "}
                to see all changelogs since the introduction of it.
              </p>
              <p>Note that changelogs do not cover all the changes made along the building process of this project but give you an idea of the major and minor changes that really impact the user experience or the tools directly.</p>
            </div>
          </div>
        </div>
        {/* Bugs & suggestions */}
        <div className="flex flex-col gap-2">
          <h4 className="font-serif text-3xl font-bold">Bugs & Suggestions</h4>
          <p className="text-text-border-dark dark:text-text-border-light">
            If you find any bugs, security breach, want to make a copyright claim or have any suggestions for new tools or improvements, please feel free to write me an email at{" "}
            <Link className="text-accent underline" to={"mailto:oslo418@proton.me"}>
              oslo418@proton.me
            </Link>
          </p>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h6 className="font-serif text-3xl font-bold">Contact</h6>
          <p className="text-text-border-dark dark:text-text-border-light">
            For any inquiries or assistance, please feel free to reach out to me on Twitter for a quick response{" "}
            <a href="https://twitter.com/Oslo418" className="text-accent underline">
              @Oslo418
            </a>
            . I look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
