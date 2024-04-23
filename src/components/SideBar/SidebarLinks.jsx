import React from "react";
import { NavLink } from "react-router-dom";

function SidebarLinks({ link, icon, linkname }) {
    return (
        <NavLink to={link} className={({ isActive }) => (isActive ? "flex items-center gap-2 rounded-md bg-gray-800 px-3 py-2 text-white underline" : "flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 hover:bg-gray-200")}>
            <div>{icon}</div>
            <div className={({ isActive }) => (isActive ? "font-medium underline" : "font-medium")}>{linkname}</div>
        </NavLink>
    );
}

export default SidebarLinks;
