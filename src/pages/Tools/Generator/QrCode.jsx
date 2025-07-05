import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver";
import { Helmet } from "react-helmet";
import { ChromePicker } from "react-color";
import FAQSection from "../../../components/Faq";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";
import ToolsPageLayout from "../../../layouts/ToolsPageLayout";
import DropdownInput from "../../../components/ui/DropdownInput";

export default function QrCode() {
  const [link, setLink] = useState("https://oslo-toolbox.vercel.app");
  const [color, setColor] = useState(document.documentElement.classList.contains("dark") ? "#14b8a6" : "#0f766e");
  const [bgColor, setBgColor] = useState("transparent");
  const [previousBgColor, setPreviousBgColor] = useState(document.documentElement.classList.contains("dark") ? "#ffffff" : "#000000");
  const [transparentBg, setTransparentBg] = useState(true);
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState("M");
  const [showQRCode, setShowQRCode] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);
  const qrRef = useRef();
  const colorPickerRef = useRef();
  const bgColorPickerRef = useRef();

  useEffect(() => {
    setShowQRCode(true);
    const updateColorScheme = () => {
      setColor(document.documentElement.classList.contains("dark") ? "#14b8a6" : "#0f766e");
    };

    const observer = new MutationObserver(updateColorScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
      if (bgColorPickerRef.current && !bgColorPickerRef.current.contains(event.target)) {
        setShowBgColorPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkChange = (e) => {
    setLink(e.target.value);
    setShowQRCode(true);
  };

  const handleDownload = () => {
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => saveAs(blob, "qrcode.png"));
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  const handleBgColorChange = (color) => {
    setBgColor(color.hex);
    setPreviousBgColor(color.hex);
    setTransparentBg(false);
  };

  const handleTransparentBgChange = (e) => {
    setTransparentBg(e.target.checked);
    if (e.target.checked) {
      setBgColor("transparent");
    } else {
      setBgColor(previousBgColor);
    }
  };

  const handleBgColorPickerClick = () => {
    if (transparentBg) {
      setTransparentBg(false);
      setBgColor(previousBgColor);
    }
    setShowBgColorPicker(!showBgColorPicker);
  };

  return (
    <>
      <Helmet>
        <title>Free QR Code Generator - Create and Download QR Codes Instantly</title>
        <meta name="description" content="Easily generate QR codes for your links or text. Customize the color and download your QR code in PNG format. Perfect for businesses, events, and personal use." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/QrCode" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col gap-4 rounded-lg border-2 p-4 md:p-6">
        <input type="text" value={link} onChange={handleLinkChange} placeholder="Enter your link or text here" className="dark:border-border-dark focus:border-accent dark:bg-dark bg-light border-border-light w-full rounded-md border-2 p-2 outline-hidden" />
        <div className="flex flex-col gap-4 md:flex-row">
          {showQRCode && link && (
            <div ref={qrRef} className="border-border-light dark:border-border-dark w-fit rounded border-2 p-2">
              <QRCode value={link} fgColor={color} size={240} bgColor={bgColor} level={errorCorrectionLevel} />
            </div>
          )}
          <div className="my-auto flex h-full flex-col justify-between gap-2">
            <div className="flex flex-col gap-2 text-sm">
              <label className="relative flex w-fit flex-col">
                QR Code Color:
                <button onClick={() => setShowColorPicker(!showColorPicker)} className="border-border-light dark:hover:bg-text-border-dark hover:bg-text-border-light dark:border-border-dark flex w-fit items-center gap-1 rounded-md border p-1 px-2 text-sm duration-150 hover:cursor-pointer">
                  <span className="inline-block h-4 w-4 rounded-full border" style={{ backgroundColor: color }}></span>
                  {color}
                </button>
                {showColorPicker && (
                  <div ref={colorPickerRef} className="absolute top-14 z-10">
                    <ChromePicker color={color} onChange={(color) => setColor(color.hex)} />
                  </div>
                )}
              </label>
              <label className="relative flex w-fit flex-col">
                Background Color:
                <button onClick={handleBgColorPickerClick} className="border-border-light dark:hover:bg-text-border-dark hover:bg-text-border-light dark:border-border-dark flex w-fit items-center gap-1 rounded-md border p-1 px-2 text-sm duration-150 hover:cursor-pointer">
                  <span className="inline-block h-4 w-4 rounded-full border" style={{ backgroundColor: bgColor }}></span>
                  {bgColor}
                </button>
                {showBgColorPicker && (
                  <div ref={bgColorPickerRef} className="absolute top-14 z-10">
                    <ChromePicker color={bgColor} onChange={handleBgColorChange} />
                  </div>
                )}
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm">
                Transparent Background
                <input type="checkbox" checked={transparentBg} onChange={handleTransparentBgChange} />
              </span>
              <DropdownInput
                id="qr-error-correction"
                label="Error Correction Level"
                value={errorCorrectionLevel}
                onChange={(e) => setErrorCorrectionLevel(e.target.value)}
                options={[
                  { value: "L", label: "L - Low" },
                  { value: "M", label: "M - Medium" },
                  { value: "Q", label: "Q - Quartile" },
                  { value: "H", label: "H - High" },
                ]}
                className="w-fit"
              />
            </div>
            <ButtonMainCta onClick={handleDownload}>Download PNG</ButtonMainCta>
          </div>
        </div>
      </div>
      <FAQSection />
    </>
  );
}
