import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarLinks from "./SidebarLinks";
import SidebarDropdown from "./SidebarDropdown";

import { FaCss3Alt, FaHome, FaWeightHanging, FaRuler, FaThermometerHalf, FaRulerCombined, FaCube, FaUnlockAlt, FaQrcode, FaHashtag, FaBalanceScale } from "react-icons/fa";
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
  const navigate = useNavigate();
  const [mainDropdowns, setMainDropdowns] = useState({
    generators: false,
    file_convert: false,
    convert: false,
    security: false,
    css: false,
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMainDropdown = (dropdown) => {
    setMainDropdowns((prevState) => ({
      ...Object.fromEntries(Object.keys(prevState).map((key) => [key, key === dropdown ? !prevState[key] : false])),
    }));
  };

  const closeAllDropdowns = () => {
    setMainDropdowns({
      generators: false,
      file_convert: false,
      convert: false,
      security: false,
      css: false,
    });
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="h-full w-full p-3 pr-0">
      <div className="flex h-fit w-full flex-col gap-2 overflow-y-auto pr-3">
        <SidebarLinks link={"/"} icon={<FaHome />} linkname={"Home"} onClick={() => handleRedirect("/")} isOpen={isOpen} />
        <SidebarLinks link={"/About"} icon={<GrCircleInformation />} linkname={"About"} onClick={closeAllDropdowns} isOpen={isOpen} />
        <hr />

        {/* Generators Dropdown */}
        {isMobile ? (
          <div onClick={() => handleRedirect("/Generators")} className="flex h-12 cursor-pointer items-center justify-center">
            <FaGear />
          </div>
        ) : (
          <SidebarDropdown label="Generators" icon={<FaGear />} isOpen={mainDropdowns.generators} onClick={() => toggleMainDropdown("generators")}>
            <>
              <SidebarLinks link={"/Generators/Password"} icon={<FaUnlockAlt />} linkname={"Password"} />
              <SidebarLinks link={"/Generators/Lorem"} icon={<TbCircleLetterL />} linkname={"Lorem Ipsum"} />
              <SidebarLinks link={"/Generators/QrCode"} icon={<FaQrcode />} linkname={"QR Code"} />
              <SidebarLinks link={"/Generators/Readme"} icon={<CgReadme />} linkname={"Readme"} />
            </>
          </SidebarDropdown>
        )}
        <hr />

        {/* Files Converter Dropdown */}
        {isMobile ? (
          <div onClick={() => handleRedirect("/FilesConvert")} className="flex h-12 cursor-pointer items-center justify-center">
            <SiConvertio />
          </div>
        ) : (
          <SidebarDropdown label="Files Converter" icon={<SiConvertio />} isOpen={mainDropdowns.file_convert} onClick={() => toggleMainDropdown("file_convert")}>
            <SidebarLinks link={"/FilesConvert/Images"} icon={<LuImage />} linkname={"Images"} />
          </SidebarDropdown>
        )}
        <hr />

        {/* Units Converter Dropdown */}
        {isMobile ? (
          <div onClick={() => handleRedirect("/UnitsConvert")} className="flex h-12 cursor-pointer items-center justify-center">
            <FaBalanceScale />
          </div>
        ) : (
          <SidebarDropdown label="Units Converter" icon={<FaBalanceScale />} isOpen={mainDropdowns.convert} onClick={() => toggleMainDropdown("convert")}>
            <>
              <SidebarLinks link={"/UnitsConvert/Mass"} icon={<FaWeightHanging />} linkname={"Mass"} />
              <SidebarLinks link={"/UnitsConvert/Length"} icon={<FaRuler />} linkname={"Length"} />
              <SidebarLinks link={"/UnitsConvert/Area"} icon={<FaRulerCombined />} linkname={"Area"} />
              <SidebarLinks link={"/UnitsConvert/Volume"} icon={<FaCube />} linkname={"Volume"} />
              <SidebarLinks link={"/UnitsConvert/Temperature"} icon={<FaThermometerHalf />} linkname={"Temperature"} />
              <SidebarLinks link={"/UnitsConvert/Speed"} icon={<IoSpeedometer />} linkname={"Speed"} />
              <SidebarLinks link={"/UnitsConvert/Time"} icon={<IoTimerSharp />} linkname={"Time"} />
            </>
          </SidebarDropdown>
        )}
        <hr />

        {/* Security Dropdown */}
        {isMobile ? (
          <div onClick={() => handleRedirect("/Security")} className="flex h-12 cursor-pointer items-center justify-center">
            <MdSecurity />
          </div>
        ) : (
          <SidebarDropdown label="Security" icon={<MdSecurity />} isOpen={mainDropdowns.security} onClick={() => toggleMainDropdown("security")}>
            <>
              <SidebarLinks link={"/Security/IpLookup"} icon={<TbMapPinQuestion />} linkname={"IP Lookup"} />
              <SidebarLinks link={"/Security/Hash"} icon={<FaHashtag />} linkname={"Hash Generator"} />
            </>
          </SidebarDropdown>
        )}
        <hr />

        {/* CSS Dropdown */}
        {isMobile ? (
          <div onClick={() => handleRedirect("/Css")} className="flex h-12 cursor-pointer items-center justify-center">
            <FaCss3Alt />
          </div>
        ) : (
          <SidebarDropdown label="Css" icon={<FaCss3Alt />} isOpen={mainDropdowns.css} onClick={() => toggleMainDropdown("css")}>
            <>
              <SidebarLinks link={"/Css/Gradient"} icon={<MdGradient />} linkname={"Gradient gen"} />
              <SidebarLinks link={"/Css/Box-shadow"} icon={<BsShadows />} linkname={"Box-shadow gen"} />
            </>
          </SidebarDropdown>
        )}
      </div>
    </div>
  );
}

export default SidebarNav;
