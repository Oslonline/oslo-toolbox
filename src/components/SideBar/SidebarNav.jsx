import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

function SidebarNav() {
  const location = useLocation();

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

  const isActiveLink = (link) => location.pathname === link;

  return (
    <div className="h-full w-full p-3 pr-0">
      <div className="flex h-fit w-full flex-col gap-2 overflow-y-auto pr-3">
        <SidebarLinks link={"/"} icon={<FaHome />} linkname={"Home"} onClick={closeAllDropdowns} />
        <SidebarLinks link={"/About"} icon={<GrCircleInformation />} linkname={"About"} onClick={closeAllDropdowns} />
        <hr className="dark:border-gray-800" />

        {/* Generators Dropdown */}
        {isMobile ? (
          <Link to={"/Generators"} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 dark:text-gray-200 ${isActiveLink("/Generators") ? "bg-gray-800 text-white underline dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-200" : ""}`}>
            <FaGear />
          </Link>
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
        <hr className="dark:border-gray-800" />

        {/* Files Converter Dropdown */}
        {isMobile ? (
          <Link to={"/FilesConvert"} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 dark:text-gray-200 ${isActiveLink("/FilesConvert") ? "bg-gray-800 text-white underline hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-200" : ""}`}>
            <SiConvertio />
          </Link>
        ) : (
          <SidebarDropdown label="Files Converter" icon={<SiConvertio />} isOpen={mainDropdowns.file_convert} onClick={() => toggleMainDropdown("file_convert")}>
            <SidebarLinks link={"/FilesConvert/Images"} icon={<LuImage />} linkname={"Images"} />
          </SidebarDropdown>
        )}
        <hr className="dark:border-gray-800" />

        {/* Units Converter Dropdown */}
        {isMobile ? (
          <Link to={"/UnitsConvert"} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 dark:text-gray-200 ${isActiveLink("/UnitsConvert") ? "bg-gray-800 text-white underline hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-200" : ""}`}>
            <FaBalanceScale />
          </Link>
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
        <hr className="dark:border-gray-800" />

        {/* Security Dropdown */}
        {isMobile ? (
          <Link to={"/Security"} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 dark:text-gray-200 ${isActiveLink("/Security") ? "bg-gray-800 text-white underline hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-200" : ""}`}>
            <MdSecurity />
          </Link>
        ) : (
          <SidebarDropdown label="Security" icon={<MdSecurity />} isOpen={mainDropdowns.security} onClick={() => toggleMainDropdown("security")}>
            <>
              <SidebarLinks link={"/Security/IpLookup"} icon={<TbMapPinQuestion />} linkname={"IP Lookup"} />
              <SidebarLinks link={"/Security/Hash"} icon={<FaHashtag />} linkname={"Hash Generator"} />
            </>
          </SidebarDropdown>
        )}
        <hr className="dark:border-gray-800" />

        {/* CSS Dropdown */}
        {isMobile ? (
          <Link to={"/Css"} className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-950 dark:text-gray-200 ${isActiveLink("/Css") ? "bg-gray-800 text-white underline hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-200" : ""}`}>
            <FaCss3Alt />
          </Link>
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
