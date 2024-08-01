import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { saveAs } from "file-saver";

export default function QrCode() {
  const [link, setLink] = useState("");
  const [color, setColor] = useState("#000000");
  const [showQRCode, setShowQRCode] = useState(false);
  const qrRef = useRef();

  const handleLinkChange = (e) => {
    const inputLink = e.target.value;
    setLink(inputLink);
  };

  const generateQRCode = () => {
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        saveAs(blob, "qrcode.png");
      });
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <p className="text-gray-500">Generate QR Code from links for free. Enter your link or maybe some text, choose the QR Code color and click generate ! You can download the QR Code as PNG too.</p>
      </div>
      <div className="flex items-center justify-between gap-4 rounded-md border-2 border-gray-200 p-4">
        <input type="text" value={link} onChange={handleLinkChange} placeholder="Link / Text" className={`p-2rounded-md w-full rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400 focus:outline-offset-0`} />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-10 w-10 min-w-10 rounded-md border-2 border-gray-300 hover:cursor-pointer" />
        <button onClick={generateQRCode} className={`rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600`}>
          Generate
        </button>
      </div>

      {showQRCode && link && (
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-gray-200 p-4">
          <div ref={qrRef} className="mb-4">
            <QRCode value={link} fgColor={color} size={200} bgColor="transparent" />
          </div>
          <button onClick={handleDownload} className="rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600">
            Download PNG
          </button>
        </div>
      )}
    </div>
  );
}
