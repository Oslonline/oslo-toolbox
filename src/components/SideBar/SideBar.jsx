import React from "react";
import { Link } from "react-router-dom";
import SidebarNav from "./SidebarNav";

function SideBar() {
    return (
        <div className="sticky left-0 h-full w-56 border-r-2 border-gray-200 bg-gray-50">
            <div className="flex h-1/6 items-center justify-center border-b-2 border-gray-200 p-6">
                <Link to={"/"} className="h-full">
                    <img className="h-full" src="/images/toolbox.png" alt="" />
                </Link>
            </div>
            <nav className="flex h-5/6 flex-col">
                <SidebarNav />
            </nav>
        </div>
    );
}

export default SideBar;
