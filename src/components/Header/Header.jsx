import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { FiSun } from "react-icons/fi";
import { AiOutlineMoon } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";

function Header({ openSearchModal }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const location = useLocation();
  const isToolPage = location.pathname.startsWith("/Generators") || location.pathname.startsWith("/UnitsConvert") || location.pathname.startsWith("/Security") || location.pathname.startsWith("/Css") || location.pathname.startsWith("/Images");

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="dark:bg-text-base/75 border-border-light dark:border-border-dark bg-text-dark/75 sticky top-0 z-10 flex w-full items-center justify-between border-2 p-2 backdrop-blur-xl sm:justify-around md:px-4 lg:gap-12 xl:gap-20 xl:p-3">
      <div className="flex items-end gap-2">
        <Link className="decoration-accent flex items-center gap-2 font-serif text-xl underline decoration-wavy decoration-1 md:text-2xl lg:text-3xl 2xl:text-4xl" to={"/"}>
          oslo's toolbox
        </Link>
        {isToolPage && <Breadcrumbs />}
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={openSearchModal}
          className="dark:border-border-dark dark:bg-dark text-text-border-light dark:text-text-border-dark border-border-light bg-light hidden items-center gap-2 rounded-lg border-2 px-2 py-1.5 text-xs hover:cursor-pointer hover:bg-stone-200/30 hover:duration-200 focus:outline-none md:flex md:text-sm 2xl:text-base dark:hover:bg-stone-800/30"
        >
          <TbSearch />
          Search
          <span className="dark:bg-text-base text-text-base bg-text-dark dark:border-border-dark border-border-light dark:text-text-dark rounded border p-0.5 font-mono text-xs">Ctrl K</span>
        </button>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className={`transition-transform duration-500 ease-in-out hover:cursor-pointer ${isDarkMode ? "rotate-0" : "rotate-180"}`}>
          {isDarkMode ? <AiOutlineMoon fontSize={25} /> : <FiSun fontSize={25} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
