import React, { useState } from "react";
import SidebarLinks from "./SidebarLinks";
import SidebarDropdown from "./SidebarDropdown";

import { FaCss3Alt, FaExternalLinkAlt, FaHome, FaWeightHanging, FaRuler, FaThermometerHalf, FaRulerCombined, FaCube, FaUnlockAlt, FaQrcode, FaHashtag, FaBalanceScale, FaRegFileAlt } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { TbCircleLetterL, TbMapPinQuestion } from "react-icons/tb";
import { MdGradient, MdSecurity } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { BsShadows } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { CgReadme } from "react-icons/cg";
import { LuImage } from "react-icons/lu";

function SidebarNav() {
  const [mainDropdowns, setMainDropdowns] = useState({
    generators: false,
    file_convert: false,
    convert: false,
    security: false,
    css: false,
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
      generators: false,
      file_convert: false,
      convert: false,
      security: false,
      css: false,
    });
  };

  return (
    <div className="flex h-full w-full flex-col justify-between p-3">
      <div className="flex h-full w-full flex-col gap-2">
        <SidebarLinks link={"/"} icon={<FaHome />} linkname={"Home"} onClick={closeAllDropdowns} />
        <SidebarLinks link={"/About"} icon={<GrCircleInformation />} linkname={"About"} onClick={closeAllDropdowns} />
        <hr />
        <SidebarDropdown label="Generators" icon={<FaGear />} isOpen={mainDropdowns.generators} onClick={() => toggleMainDropdown("generators")}>
          <SidebarLinks link={"/Generators/Password"} icon={<FaUnlockAlt />} linkname={"Password"} />
          <SidebarLinks link={"/Generators/Lorem"} icon={<TbCircleLetterL />} linkname={"Lorem Ipsum"} />
          <SidebarLinks link={"/Generators/QrCode"} icon={<FaQrcode />} linkname={"QR Code"} />
          <SidebarLinks link={"/Generators/Hash"} icon={<FaHashtag />} linkname={"Hash"} />
          <SidebarLinks link={"/Generators/Readme"} icon={<CgReadme />} linkname={"Readme"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Files Converter" icon={<SiConvertio />} isOpen={mainDropdowns.file_convert} onClick={() => toggleMainDropdown("file_convert")}>
          <SidebarLinks link={"/FilesConvert/Images"} icon={<LuImage />} linkname={"Images"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Units Converter" icon={<FaBalanceScale />} isOpen={mainDropdowns.convert} onClick={() => toggleMainDropdown("convert")}>
          <SidebarLinks link={"/UnitsConvert/Mass"} icon={<FaWeightHanging />} linkname={"Mass"} />
          <SidebarLinks link={"/UnitsConvert/Length"} icon={<FaRuler />} linkname={"Length"} />
          <SidebarLinks link={"/UnitsConvert/Area"} icon={<FaRulerCombined />} linkname={"Area"} />
          <SidebarLinks link={"/UnitsConvert/Volume"} icon={<FaCube />} linkname={"Volume"} />
          <SidebarLinks link={"/UnitsConvert/Temperature"} icon={<FaThermometerHalf />} linkname={"Temperature"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Security" icon={<MdSecurity />} isOpen={mainDropdowns.security} onClick={() => toggleMainDropdown("security")}>
          <SidebarLinks link={"/Security/IpLookup"} icon={<TbMapPinQuestion />} linkname={"IP Lookup"} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Css" icon={<FaCss3Alt />} isOpen={mainDropdowns.css} onClick={() => toggleMainDropdown("css")}>
          <SidebarLinks link={"/Css/Gradient"} icon={<MdGradient />} linkname={"Gradient gen"} />
          <SidebarLinks link={"/Css/Box-shadow"} icon={<BsShadows />} linkname={"Box-shadow gen"} />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarLinks link={"/About#contact"} icon={<FaExternalLinkAlt />} linkname={"Contact"} onClick={closeAllDropdowns} />
      </div>
    </div>
  );
}
export default SidebarNav;
