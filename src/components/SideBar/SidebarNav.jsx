import React, { useState } from "react";
import SidebarLinks from "./SidebarLinks";
import SidebarDropdown from "./SidebarDropdown";

import { FaCss3Alt, FaExternalLinkAlt, FaHome, FaWeightHanging, FaRuler, FaThermometerHalf, FaRulerCombined, FaCube, FaUnlockAlt } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { MdGradient } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { BsShadows } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";

function SidebarNav() {
  const [mainDropdowns, setMainDropdowns] = useState({
    css: false,
    convert: false,
    gen: false,
  });

  // const [subDropdowns, setSubDropdowns] = useState({

  // });

  const toggleMainDropdown = (dropdown) => {
    setMainDropdowns((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map((key) => [key, key === dropdown ? !prevState[key] : false])),
    }));

    // setSubDropdowns({

    // });
  };

  // const toggleSubDropdown = (dropdown) => {
  //     setSubDropdowns((prevState) => ({
  //         ...prevState,
  //         [dropdown]: !prevState[dropdown],
  //     }));
  // };

  const closeAllDropdowns = () => {
    setMainDropdowns({
      css: false,
      convert: false,
      gen: false,
    });
  };

  return (
    <div className="flex h-full w-full flex-col justify-between p-3">
      <div className="flex h-full w-full flex-col gap-2">
        <SidebarLinks link={"/"} icon={<FaHome />} linkname={"Home"} onClick={closeAllDropdowns} />
        <SidebarLinks link={"/About"} icon={<GrCircleInformation />} linkname={"About"} onClick={closeAllDropdowns} />
        <SidebarDropdown label="Css" icon={<FaCss3Alt />} isOpen={mainDropdowns.css} onClick={() => toggleMainDropdown("css")}>
          <SidebarLinks link={"/Css/Gradient"} icon={<MdGradient />} linkname={"Gradient gen"} />
          <SidebarLinks link={"/Css/Box-shadow"} icon={<BsShadows />} linkname={"Box-shadow gen"} />
        </SidebarDropdown>
        <SidebarDropdown label="Convert Units" icon={<SiConvertio />} isOpen={mainDropdowns.convert} onClick={() => toggleMainDropdown("convert")}>
          <SidebarLinks link={"/UnitsConvert/Mass"} icon={<FaWeightHanging />} linkname={"Mass"} />
          <SidebarLinks link={"/UnitsConvert/Length"} icon={<FaRuler />} linkname={"Length"} />
          <SidebarLinks link={"/UnitsConvert/Area"} icon={<FaRulerCombined />} linkname={"Area"} />
          <SidebarLinks link={"/UnitsConvert/Volume"} icon={<FaCube />} linkname={"Volume"} />
          <SidebarLinks link={"/UnitsConvert/Temperature"} icon={<FaThermometerHalf />} linkname={"Temperature"} />
        </SidebarDropdown>
        <SidebarDropdown label="Generators" icon={<FaGear />} isOpen={mainDropdowns.gen} onClick={() => toggleMainDropdown("gen")}>
          <SidebarLinks link={"/Generators/Password"} icon={<FaUnlockAlt />} linkname={"Password"} />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarLinks link={"/About#contact"} icon={<FaExternalLinkAlt />} linkname={"Contact"} onClick={closeAllDropdowns} />
      </div>
    </div>
  );
}
export default SidebarNav;
