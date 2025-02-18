import React, { useEffect, useState, useRef } from "react";
import { FiInfo } from "react-icons/fi";
import { TbSearch } from "react-icons/tb";

function SearchModal({ isOpen, onClose, onSearch, searchResults, randomTools }) {
  const [inputValue, setInputValue] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("mousedown", handleClickOutside);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      document.body.classList.remove("no-scroll");
      setInputValue("");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  const resultsToDisplay = inputValue ? searchResults : randomTools;

  return (
    <div className="dark:bg-light/2 bg-dark/2 bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div ref={modalRef} className="bg-light dark:bg-dark relative min-h-[300px] w-10/12 max-w-2xl rounded-lg p-2 shadow-sm">
        <div className="relative">
          <TbSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500 dark:text-gray-400" />
          <input ref={inputRef} type="text" placeholder="Search tools..." className="dark:bg-dark w-full px-4 py-2 pl-10 focus:outline-none" onChange={handleInputChange} value={inputValue} />
        </div>
        <hr className="dark:text-border-dark text-border-light mb-4" />
        <ul className="flex flex-col gap-2 px-2">
          {resultsToDisplay.length > 0 ? (
            resultsToDisplay.slice(0, 10).map((result, index) => (
              <li key={index} className="dark:hover:bg-border-dark hover:bg-border-light flex items-center gap-2 rounded-md px-2 py-1 select-none">
                {result.maintenance ? (
                  <span className="flex w-full cursor-not-allowed items-center justify-between opacity-70">
                    <div>
                      <span className="text-text-base dark:text-text-dark flex items-center gap-2 text-sm font-semibold">
                        {React.createElement(result.icon)}
                        {result.name}
                      </span>
                      <p className="dark:text-text-border-light text-text-border-dark line-clamp-1 text-xs md:text-sm">{result.description}</p>
                    </div>
                    <span className="text-text-border-dark dark:text-text-border-light flex items-center gap-1">
                      <FiInfo />
                      <p className="flex text-xs md:gap-1">
                        <span className="hidden md:block">Under</span>
                        <span>maintenance</span>
                      </p>
                    </span>
                  </span>
                ) : (
                  <a href={result.link} className="flex w-full flex-col">
                    <span className="text-text-base dark:text-text-dark flex items-center gap-2 text-sm font-semibold">
                      {React.createElement(result.icon)}
                      {result.name}
                    </span>
                    <p className="dark:text-text-border-light text-text-border-dark line-clamp-1 text-xs md:text-sm">{result.description}</p>
                  </a>
                )}
              </li>
            ))
          ) : (
            <li className="dark:text-text-border-light text-text-border-dark flex flex-col text-center">
              No results found
              <span>
                <a className="text-accent" href="https://github.com/Oslonline/oslo-toolbox">
                  Contribute{" "}
                </a>
                to this project to add new tools
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchModal;
