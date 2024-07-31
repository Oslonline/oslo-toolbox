import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  const path = useLocation().pathname;

  const titleMap = {
    "/": "Home",
    "/Css": "CSS Tools",
    "/Css/Gradient": "CSS gradient generator",
    "/Css/Box-shadow": "CSS box-shadow generator",
    "/UnitsConvert": "Convert units",
    "/UnitsConvert/Mass": "Mass units converter",
    "/UnitsConvert/Length": "Length units converter",
    "/UnitsConvert/Area": "Area units converter",
    "/UnitsConvert/Volume": "Volume units converter",
    "/UnitsConvert/Temperature": "Temperature units converter",
    "/Generators/Password": "Password generator",
    "/Generators/Lorem": "Lorem Ipsum generator",
    "/About": "About & Contact",
  };

  const getTitle = () => {
    return titleMap[path] || "Page not found go back to home";
  };

  return (
    <header className="sticky top-0 flex w-full justify-between border-b-2 border-gray-200 bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800">{getTitle()}</h1>
      <Breadcrumbs />
    </header>
  );
}

export default Header;
