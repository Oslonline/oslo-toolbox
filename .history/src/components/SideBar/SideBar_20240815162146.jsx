import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";
import { useState } from "react";
import { LuAlignJustify } from "react-icons/lu";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false); // Start with the sidebar closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`sticky left-0 h-full border-r-2 border-gray-200 bg-gray-50 transition-transform duration-300 ${isOpen ? "w-56" : "w-16"} md:w-56`}
    >
      <div className="flex  items-center justify-between border-b-2 border-gray-200 md:p-6 sm:p-3">
        <Link to={"/"} className="h-full">
          <img
            className="sm:w-10 md:w-20 lg:w-32"
            src="/images/toolbox.webp"
            alt="Logo"
          />
        </Link>
        {/* <button onClick={toggleSidebar} className="block md:hidden">
          
          <LuAlignJustify />
        </button> */}
      </div>
      {/* Show sidebar nav only if isOpen is true */}

      <nav className="flex h-5/6 flex-col">
        <SidebarNav isOpen={isOpen} />
      </nav>
      {isOpen && (
        <nav className="flex h-5/6 flex-col">
          <SidebarNav isOpen={isOpen} />
        </nav>
      )}
    </div>
  );
}

export default SideBar;
