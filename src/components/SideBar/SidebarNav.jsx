import React, { useState } from "react";
import SidebarLinks from "./SidebarLinks";
import SidebarDropdown from "./SidebarDropdown";
import { FaCss3Alt, FaExternalLinkAlt, FaHome, FaWeightHanging, FaRuler, FaThermometerHalf, FaRulerCombined, FaCube, FaUnlockAlt, FaQrcode, FaHashtag, FaBalanceScale } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { TbCircleLetterL, TbMapPinQuestion } from "react-icons/tb";
import { MdGradient, MdSecurity } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { BsShadows } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";
import { CgReadme } from "react-icons/cg";
import { LuImage } from "react-icons/lu";
import { IoSpeedometer, IoTimerSharp } from "react-icons/io5";

function SidebarNav({ isOpen }) {
  const [mainDropdowns, setMainDropdowns] = useState({
    generators: false,
    file_convert: false,
    convert: false,
    security: false,
    css: false,
  });

  // const [subDropdowns, setSubDropdowns] = useState({

  // })

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
        <SidebarLinks link={"/"} icon={<FaHome />} linkname={"Home"} onClick={closeAllDropdowns} isOpen={isOpen} />
        <SidebarLinks link={"/About"} icon={<GrCircleInformation />} linkname={"About"} onClick={closeAllDropdowns} isOpen={isOpen} />
        <hr />
        <SidebarDropdown label="Generators" icon={<FaGear />} isOpen={mainDropdowns.generators} onClick={() => toggleMainDropdown("generators")}>
          <SidebarLinks link={"/Generators/Password"} icon={<FaUnlockAlt />} linkname={"Password"} isOpen={isOpen} />
          <SidebarLinks link={"/Generators/Lorem"} icon={<TbCircleLetterL />} linkname={"Lorem Ipsum"} isOpen={isOpen} />
          <SidebarLinks link={"/Generators/QrCode"} icon={<FaQrcode />} linkname={"QR Code"} isOpen={isOpen} />
          <SidebarLinks link={"/Generators/Hash"} icon={<FaHashtag />} linkname={"Hash"} isOpen={isOpen} />
          <SidebarLinks link={"/Generators/Readme"} icon={<CgReadme />} linkname={"Readme"} isOpen={isOpen} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Files Converter" icon={<SiConvertio />} isOpen={mainDropdowns.file_convert} onClick={() => toggleMainDropdown("file_convert")}>
          <SidebarLinks link={"/FilesConvert/Images"} icon={<LuImage />} linkname={"Images"} isOpen={isOpen} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Units Converter" icon={<FaBalanceScale />} isOpen={mainDropdowns.convert} onClick={() => toggleMainDropdown("convert")}>
          <SidebarLinks link={"/UnitsConvert/Mass"} icon={<FaWeightHanging />} linkname={"Mass"} isOpen={isOpen} />
          <SidebarLinks link={"/UnitsConvert/Length"} icon={<FaRuler />} linkname={"Length"} isOpen={isOpen} />
          <SidebarLinks link={"/UnitsConvert/Area"} icon={<FaRulerCombined />} linkname={"Area"} isOpen={isOpen} />
          <SidebarLinks link={"/UnitsConvert/Volume"} icon={<FaCube />} linkname={"Volume"} isOpen={isOpen} />
          <SidebarLinks link={"/UnitsConvert/Temperature"} icon={<FaThermometerHalf />} linkname={"Temperature"} isOpen={isOpen} />
          <SidebarLinks link={"/UnitsConvert/Speed"} icon={<IoSpeedometer />} linkname={"Speed"} isOpen={isOpen} />
          <SidebarLinks link={"/UnitsConvert/Time"} icon={<IoTimerSharp />} linkname={"Time"} isOpen={isOpen} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Security" icon={<MdSecurity />} isOpen={mainDropdowns.security} onClick={() => toggleMainDropdown("security")}>
          <SidebarLinks link={"/Security/IpLookup"} icon={<TbMapPinQuestion />} linkname={"IP Lookup"} isOpen={isOpen} />
        </SidebarDropdown>
        <hr />
        <SidebarDropdown label="Css" icon={<FaCss3Alt />} isOpen={mainDropdowns.css} onClick={() => toggleMainDropdown("css")}>
          <SidebarLinks link={"/Css/Gradient"} icon={<MdGradient />} linkname={"Gradient gen"} isOpen={isOpen} />
          <SidebarLinks link={"/Css/Box-shadow"} icon={<BsShadows />} linkname={"Box-shadow gen"} isOpen={isOpen} />
        </SidebarDropdown>
      </div>
      <div>
        <SidebarLinks link={"/About#contact"} icon={<FaExternalLinkAlt />} linkname={"Contact"} onClick={closeAllDropdowns} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default SidebarNav;
