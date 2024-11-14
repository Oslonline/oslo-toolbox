import React, { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver";
import { Helmet } from "react-helmet";

export default function QrCode() {
  const [link, setLink] = useState("");
  const [color, setColor] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const qrRef = useRef();

  useEffect(() => {
    const updateColorScheme = () => {
      setColor(document.documentElement.classList.contains("dark") ? "#FFFFFF" : "#000000");
    };

    // Initial check
    updateColorScheme();

    // Observe class changes for dark mode
    const observer = new MutationObserver(updateColorScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, []);

  const handleLinkChange = (e) => setLink(e.target.value);

  const generateQRCode = () => setShowQRCode(true);

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

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <Helmet>
        <title>Free QR Code Generator - Create and Download QR Codes Instantly</title>
        <meta name="description" content="Easily generate QR codes for your links or text. Customize the color and download your QR code in PNG format. Perfect for businesses, events, and personal use." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/QrCode" />
      </Helmet>

      <div>
        <p className="text-gray-600 dark:text-gray-400">Generate QR Codes from links or text for free. Enter your content, choose a color, and click 'Generate'! Download the QR Code as a PNG file to use it wherever you need.</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
        <div className="flex flex-col items-center justify-between gap-4 rounded-md border-2 border-gray-200 bg-white p-4 md:flex-row dark:border-gray-800 dark:bg-gray-950">
          <div className="flex w-full items-center gap-2">
            <input type="text" value={link} onChange={handleLinkChange} placeholder="Enter your link or text here" className="w-full rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950" />
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-10 min-w-10 rounded-md border-2 border-gray-300 hover:cursor-pointer md:hidden dark:border-gray-800" aria-label="Choose QR Code color" />
          </div>
          <div className="flex w-full items-center gap-4 md:w-fit">
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="hidden h-10 w-10 min-w-10 rounded-md border-2 border-gray-300 hover:cursor-pointer md:block dark:border-gray-800" aria-label="Choose QR Code color" />
            <button onClick={generateQRCode} className="w-full rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600 md:w-fit dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200">
              Generate
            </button>
          </div>
        </div>

        {showQRCode && link && (
          <div className="flex flex-col items-center justify-center rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
            <div ref={qrRef} className="mb-4">
              <QRCode value={link} fgColor={color} size={200} bgColor="transparent" />
            </div>
            <button onClick={handleDownload} className="rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200">
              Download PNG
            </button>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl dark:text-gray-100">Why Use a QR Code Generator?</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">QR codes are a quick and efficient way to share information. Whether you’re a business promoting a product, hosting an event, or just sharing your contact details, a QR code can make it easier for your audience to connect with you.</p>
        <h3 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-gray-100">Frequently Asked Questions</h3>
        <div className="mt-2">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">What is a QR Code?</h4>
          <p className="text-gray-600 dark:text-gray-400">A QR Code (Quick Response Code) is a type of barcode that contains information, such as a link or text, which can be easily scanned using a smartphone camera.</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">How can I use a QR Code?</h4>
          <p className="text-gray-600 dark:text-gray-400">You can use QR Codes for various purposes like sharing URLs, contact details, Wi-Fi passwords, or event information. Simply generate the QR Code, download it, and add it to your promotional materials.</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Is it free to generate and download QR Codes?</h4>
          <p className="text-gray-600 dark:text-gray-400">Yes, you can generate and download QR Codes for free using this tool. There are no hidden fees.</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">Can I change the color of my QR Code?</h4>
          <p className="text-gray-600 dark:text-gray-400">Absolutely! You can customize the color of your QR Code to match your branding or personal preference before downloading it.</p>
        </div>
      </div>
    </div>
  );
}
