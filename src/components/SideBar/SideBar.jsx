import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";

function SideBar() {
  return (
    <div className={`sticky left-0 h-full border-r-2 border-gray-200 bg-gray-50 transition-transform duration-300 ${isOpen ? "w-56" : "w-16"} md:w-56`}>
      <div className="hidden items-center justify-center border-b-2 border-gray-200 p-4 md:flex md:h-1/6">
        <Link to={"/"} className="h-full md:p-4">
          <img className="lg:w-26 w-8 sm:w-14 md:w-20" src="/images/toolbox.webp" alt="Logo" />
        </Link>
      </div>

      <nav className="flex h-full flex-col justify-between md:h-5/6">
        <SidebarNav isOpen={isOpen} />
      </nav>
    </div>
  );
}

export default SideBar;
