import { useState } from "react";
import CryptoJS from "crypto-js";
import { FaCheck, FaCopy } from "react-icons/fa";

export default function Hash() {
  const [text, setText] = useState("");
  const [hashType, setHashType] = useState("MD5");
  const [hash, setHash] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1000);
  };

  const handleGenerateHash = () => {
    let generatedHash;
    switch (hashType) {
      case "MD5":
        generatedHash = CryptoJS.MD5(text).toString();
        break;
      case "SHA-1":
        generatedHash = CryptoJS.SHA1(text).toString();
        break;
      case "SHA-256":
        generatedHash = CryptoJS.SHA256(text).toString();
        break;
      case "SHA-512":
        generatedHash = CryptoJS.SHA512(text).toString();
        break;
      default:
        generatedHash = "";
    }
    setHash(generatedHash);
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <p className="text-gray-500">Generate hash from text to MD5, SHA-1, SHA-256... Add your text, choose the hash type, click generate and it's done!</p>
      </div>
      <div className="flex items-center justify-between gap-4 rounded-md border-2 border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <input type="text" placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} className={`w-full rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-none focus:border-orange-400 focus:outline-offset-0`} />
          <p className="font-semibold">TO</p>
          <select value={hashType} onChange={(e) => setHashType(e.target.value)} className="rounded-md border-2 border-gray-200 bg-white p-2 focus:border-orange-400">
            <option value="MD5">MD5</option>
            <option value="SHA-1">SHA-1</option>
            <option value="SHA-256">SHA-256</option>
            <option value="SHA-512">SHA-512</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleCopy}>{copySuccess ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}</button>
          <button onClick={handleGenerateHash} className={`rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600`}>
            Generate
          </button>
        </div>
      </div>
      {hash && (
        <div className="flex flex-col gap-3 rounded-md border-2 border-gray-200 p-4">
          <p className="break-words rounded-md bg-gray-950 p-2 text-gray-50">{hash}</p>
        </div>
      )}
    </div>
  );
}
