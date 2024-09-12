import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { FaCodeFork } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { AiOutlineMoon } from "react-icons/ai";
import { useEffect, useState } from "react";

function Header() {
  const path = useLocation().pathname;
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const titleMap = {
    "/": "Home",
    "/Css": "CSS tools",
    "/Css/Gradient": "CSS gradient generator",
    "/Css/Box-shadow": "CSS box-shadow generator",
    "/UnitsConvert": "Convert units",
    "/UnitsConvert/Mass": "Mass units converter",
    "/UnitsConvert/Length": "Length units converter",
    "/UnitsConvert/Area": "Area units converter",
    "/UnitsConvert/Volume": "Volume units converter",
    "/UnitsConvert/Temperature": "Temperature units converter",
    "/UnitsConvert/Speed": "Speed units converter",
    "/UnitsConvert/Time": "Time units converter",
    "/FilesConvert": "Convert files",
    "/FilesConvert/Images": "Images files converter",
    "/Generators": "Misc generators",
    "/Generators/Password": "Password generator",
    "/Generators/Lorem": "Lorem Ipsum generator",
    "/Generators/QrCode": "QR Code generator",
    "/Generators/Readme": "Github Readme generator",
    "/Security": "Security tools",
    "/Security/IpLookup": "IP Address Lookup",
    "/Security/Hash": "Hash generator",
    "/About": "About & Contact",
  };

  const getTitle = () => {
    return titleMap[path] || "Page not found go back to home";
  };

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2  border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-end gap-2">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-gray-50">{getTitle()}</h1>
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-4">
        {path === "/" && (
          <a href="https://github.com/Oslonline/oslo-toolbox" className="flex w-fit items-center gap-2 rounded-lg bg-orange-400 px-3 py-1.5 text-gray-50 duration-200 hover:bg-orange-600 focus:bg-gray-800 focus:text-gray-50 dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200">
            <FaCodeFork /> Contribute
          </a>
        )}
        <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <AiOutlineMoon fontSize={25} /> : <FiSun fontSize={25} />}</button>
      </div>
    </header>
  );
}

export default Header;
