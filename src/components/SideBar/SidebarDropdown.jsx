import { FaChevronDown } from "react-icons/fa";

function SidebarDropdown({ label, icon, isOpen, onClick, children }) {
  return (
    <>
      <button className="flex justify-between rounded-md px-3 py-2 text-start hover:bg-gray-200 dark:hover:bg-gray-800" onClick={onClick}>
        <div className="flex items-center gap-2">
          <div>{icon}</div>
          <p className={`hidden md:block`}>{label}</p>
        </div>
        <div className="flex items-center">
          <FaChevronDown className={`md:block ${isOpen ? "rotate-180" : "hidden"}`} />
        </div>
      </button>
      <div className={`flex flex-col gap-2 pl-2 ${isOpen ? "block" : "hidden"}`}>{children}</div>
    </>
  );
}

export default SidebarDropdown;
