import { NavLink, useLocation } from "react-router-dom";

function SidebarLinks({ link, icon, linkname, onClick, isOpen }) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <NavLink to={link} onClick={onClick} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 hover:bg-gray-200 ${isActive ? "bg-gray-800 text-white underline hover:bg-gray-800" : ""}`}>
      <div>{icon}</div>
      {/* Show link name only for desktop versions */}
      <div className={`font-medium ${isActive ? "underline" : ""} hidden md:block`}>{linkname}</div>
    </NavLink>
  );
}

export default SidebarLinks;
