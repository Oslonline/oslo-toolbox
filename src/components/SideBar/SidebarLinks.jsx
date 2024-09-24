import { NavLink, useLocation } from "react-router-dom";

function SidebarLinks({ link, icon, linkname, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <NavLink to={link} onClick={onClick} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-800 ${isActive ? "bg-gray-800 text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-950 hover:dark:bg-gray-200" : ""}`}>
      <div>{icon}</div>
      <div className={`font-medium ${isActive ? "underline" : ""} hidden md:block`}>{linkname}</div>
    </NavLink>
  );
}

export default SidebarLinks;
