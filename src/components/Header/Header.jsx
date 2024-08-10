import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { FaCodeFork } from "react-icons/fa6";

function Header() {
  const path = useLocation().pathname;

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
    "/Generators/Hash": "Hash generator",
    "/Generators/Readme": "Github Readme generator",
    "/About": "About & Contact",
    "/Security": "Security tools",
    "/Security/IpLookup": "IP Address Lookup",
  };

  const getTitle = () => {
    return titleMap[path] || "Page not found go back to home";
  };

  return (
    <header className="sticky top-0 flex z-50 w-full items-center justify-between border-b-2 border-gray-200 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800">{getTitle()}</h1>
      <div className="flex items-center">
        <Breadcrumbs />
        {path === "/" && (
          <a href="https://github.com/Oslonline/oslo-toolbox" className="flex items-center gap-2 w-fit rounded-lg bg-orange-400 px-3 py-1.5 text-gray-50 duration-200 hover:bg-orange-600 focus:bg-gray-800 focus:text-gray-50">
            <FaCodeFork /> Contribute
          </a>
        )}
      </div>
    </header>
  );
}

export default Header;
