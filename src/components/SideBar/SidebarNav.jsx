import React, { useState } from "react";
import SidebarLinks from "./SidebarLinks";
import SidebarDropdown from "./SidebarDropdown";

import { FaCss3Alt, FaExternalLinkAlt, FaHome, FaWeightHanging, FaRuler, FaThermometerHalf, FaRulerCombined, FaCube, FaUnlockAlt, FaQrcode, FaHashtag } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { TbCircleLetterL, TbMapPinQuestion } from "react-icons/tb";
import { MdGradient, MdSecurity } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { BsShadows } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";

function SidebarNav() {
  const [mainDropdowns, setMainDropdowns] = useState({
    css: false,
    convert: false,
    gen: false,
    sec: false,
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
      sec: false,
    });
  };

  return (
    <div className="flex h-full w-full flex-col justify-between p-3">
      <div className="flex h-full w-full flex-col gap-2">
        <SidebarLinks link={"/"} icon={<FaHome />} linkname={"Home"} onClick={closeAllDropdowns} />
        <SidebarLinks link={"/About"} icon={<GrCircleInformation />} linkname={"About"} onClick={closeAllDropdowns} />
        <hr />
        <SidebarDropdown label="Css" icon={<FaCss3Alt />} isOpen={mainDropdowns.css} onClick={() => toggleMainDropdown("css")}>
          <SidebarLinks link={"/Css/Gradient"} icon={<MdGradient />} linkname={"Gradient gen"} />
          <SidebarLinks link={"/Css/Box-shadow"} icon={<BsShadows />} linkname={"Box-shadow gen"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Convert Units" icon={<SiConvertio />} isOpen={mainDropdowns.convert} onClick={() => toggleMainDropdown("convert")}>
          <SidebarLinks link={"/UnitsConvert/Mass"} icon={<FaWeightHanging />} linkname={"Mass"} />
          <SidebarLinks link={"/UnitsConvert/Length"} icon={<FaRuler />} linkname={"Length"} />
          <SidebarLinks link={"/UnitsConvert/Area"} icon={<FaRulerCombined />} linkname={"Area"} />
          <SidebarLinks link={"/UnitsConvert/Volume"} icon={<FaCube />} linkname={"Volume"} />
          <SidebarLinks link={"/UnitsConvert/Temperature"} icon={<FaThermometerHalf />} linkname={"Temperature"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Generators" icon={<FaGear />} isOpen={mainDropdowns.gen} onClick={() => toggleMainDropdown("gen")}>
          <SidebarLinks link={"/Generators/Password"} icon={<FaUnlockAlt />} linkname={"Password"} />
          <SidebarLinks link={"/Generators/Lorem"} icon={<TbCircleLetterL />} linkname={"Lorem Ipsum"} />
          <SidebarLinks link={"/Generators/QrCode"} icon={<FaQrcode />} linkname={"QR Code"} />
          <SidebarLinks link={"/Generators/Hash"} icon={<FaHashtag />} linkname={"Hash"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Security" icon={<MdSecurity />} isOpen={mainDropdowns.sec} onClick={() => toggleMainDropdown("sec")}>
          <SidebarLinks link={"/Security/IpLookup"} icon={<TbMapPinQuestion />} linkname={"IP Lookup"} />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarLinks link={"/About#contact"} icon={<FaExternalLinkAlt />} linkname={"Contact"} onClick={closeAllDropdowns} />
      </div>
    </div>
  );
}
export default SidebarNav;
