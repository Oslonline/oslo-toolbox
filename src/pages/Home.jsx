import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import tools from "../data/toolsData";
import FAQSection from "../components/Faq";
import ChangelogPreview from "../components/ChangelogPreview";
import LastToolAdded from "../components/homepage/LastToolAdded";
import ButtonMainCta from "../components/ui/ButtonMainCta";
import ButtonNeutralCta from "../components/ui/ButtonNeutralCta";
import { FiInfo } from "react-icons/fi";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const allToolsRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const scrollToAllTools = () => {
    allToolsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Helmet>
        <title>Oslo's Toolbox - Free Online Tools for Everyone</title>
        <meta name="description" content="Discover Oslo's Toolbox - a free online toolkit offering CSS generators, unit converters, security tools, image editing tools, and more. Simplify your digital tasks today!" />
        <meta name="keywords" content="free online tools, CSS generators, unit converters, security tools, QR code generator, password generator, image editing tools, developer tools" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com" />
      </Helmet>

      <div className="flex flex-col gap-9 p-2 md:p-4 lg:p-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex py-12 lg:w-10/12 xl:py-16">
            <div className="flex w-1/2 flex-col gap-2">
              <h1 className="font-serif text-4xl font-bold">Oslo's Toolbox</h1>
              <h2 className="text-border-dark dark:text-border-light">Explore a comprehensive suite of free online tools designed for everyone, including CSS generators, unit converters, security utilities, image editing tools, and more to streamline your workflow.</h2>
              <div className="mt-2 flex gap-4">
                <ButtonNeutralCta to="/about">About</ButtonNeutralCta>
                <ButtonMainCta onClick={scrollToAllTools}>All Tools</ButtonMainCta>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
          <hr className="bg-radial-gradient my-8 h-0.5 w-full rounded-full border-none" />
          <div className="flex w-full flex-col items-center justify-around gap-4 lg:flex-row">
            <div>
              <p className="mb-2 text-xl font-bold">Latest Changelog</p>
              <ChangelogPreview />
            </div>
            <LastToolAdded />
          </div>
          <hr ref={allToolsRef} className="bg-radial-gradient my-8 h-0.5 w-full rounded-full border-none" />
          <div className="flex flex-col gap-2">
            <h5 className="text-center font-serif text-3xl font-bold">All Tools</h5>
            <div className="flex flex-wrap justify-center gap-2">
              {tools.map((category, index) => (
                <button
                  key={index}
                  className={`border-border-light dark:border-border-dark hover:bg-border-light text-text-border-dark dark:text-text-border-light dark:hover:bg-border-dark rounded border px-1 py-0.5 text-sm duration-150 hover:cursor-pointer ${selectedCategory === category.name ? "bg-border-light dark:bg-border-dark" : ""}`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 lg:gap-10">
            {tools
              .filter((category) => !selectedCategory || category.name === selectedCategory)
              .map((category, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                  <div className="flex w-fit flex-wrap gap-4">
                    {category.tools.map((subTool, subIndex) =>
                      subTool.maintenance ? (
                        <div key={subIndex} className="dark:bg-text-base from-accent/0 bg-text-dark relative flex max-w-md flex-col justify-center gap-1 rounded-lg bg-gradient-to-bl to-transparent p-4 lg:gap-2 xl:p-5">
                          <div className="dark:bg-dark bg-text-dark absolute inset-0 rounded-lg opacity-50"></div>
                          <div className="absolute inset-0 flex items-center justify-center rounded-lg backdrop-blur-xs">
                            <span className="text-text-border-dark dark:text-text-border-light absolute right-4 bottom-4 flex items-center gap-1 select-none">
                              <FiInfo />
                              <p className="text-xs">Under maintenance</p>
                            </span>
                          </div>
                          <div className="flex items-end gap-2">
                            <span className="text-accent border-accent/40 from-accent/30 rounded border-2 bg-linear-to-t to-transparent p-2 text-lg lg:text-2xl">{React.createElement(subTool.icon)}</span>
                            <p className="font-mono text-lg font-semibold lg:text-xl xl:text-2xl">{subTool.name}</p>
                          </div>
                          <p className="line-clamp-2 text-sm text-stone-600 dark:text-stone-400">{subTool.description}</p>
                        </div>
                      ) : (
                        <Link
                          to={subTool.link}
                          key={subIndex}
                          className="dark:bg-text-base dark:border-text-base border-text-dark hover:border-accent from-accent/0 hover:from-accent/10 bg-text-dark flex max-w-md flex-col justify-center gap-1 rounded-lg border bg-gradient-to-bl to-transparent p-4 hover:cursor-pointer hover:transition hover:duration-200 lg:gap-2 xl:p-5"
                        >
                          <div className="flex items-end gap-2">
                            <span className="text-accent border-accent/40 from-accent/30 rounded border-2 bg-linear-to-t to-transparent p-2 text-lg lg:text-2xl">{React.createElement(subTool.icon)}</span>
                            <p className="font-mono text-lg font-semibold lg:text-xl xl:text-2xl">{subTool.name}</p>
                          </div>
                          <p className="line-clamp-2 text-sm text-stone-600 dark:text-stone-400">{subTool.description}</p>
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <hr className="bg-radial-gradient my-8 h-0.5 w-full rounded-full border-none" />
        <div className="flex justify-center">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
