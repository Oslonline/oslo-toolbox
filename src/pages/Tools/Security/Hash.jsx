import { useState } from "react";
import CryptoJS from "crypto-js";
import { FaCheck, FaCopy } from "react-icons/fa";
import { Helmet } from "react-helmet";
import FAQSection from "../../../components/Faq";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";

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
    <>
      <Helmet>
        <title>Free Hash Generator - Create MD5, SHA-1, SHA-256, and More</title>
        <meta name="description" content="Easily generate secure hashes for your text using MD5, SHA-1, SHA-256, SHA-512, and more. Ideal for developers and security enthusiasts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/Hash" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col gap-4 rounded-lg border-2 p-4 md:p-6">
        <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light flex flex-col items-center gap-2 rounded-md border-2 p-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Enter text here" value={text} onChange={(e) => setText(e.target.value)} className="dark:border-border-dark focus:border-accent dark:bg-dark bg-light border-border-light w-full rounded-md border-2 p-2 outline-hidden" aria-label="Input text for hashing" />
            <p className="font-semibold">TO</p>
            <select value={hashType} onChange={(e) => setHashType(e.target.value)} className="dark:border-border-dark dark:bg-dark bg-light border-border-light w-fit rounded-md border-2 p-2 hover:cursor-pointer" aria-label="Select hash algorithm">
              <option value="MD5">MD5</option>
              <option value="SHA-1">SHA-1</option>
              <option value="SHA-256">SHA-256</option>
              <option value="SHA-512">SHA-512</option>
            </select>
          </div>
          <ButtonMainCta onClick={handleGenerateHash} aria-label="Generate hash">
            Generate
          </ButtonMainCta>
        </div>

        {hash && (
          <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light flex flex-col gap-4 rounded-md border-2 p-4">
            <span className="flex flex-col gap-2">
              <p>Result :</p>
              <p className="dark:border-border-dark dark:bg-dark bg-light border-border-light w-full rounded-md border-2 p-2 text-wrap break-all">{hash}</p>
            </span>
            <ButtonMainCta onClick={handleCopy} className="flex w-fit items-center gap-2 text-sm" aria-label="Copy Lorem Ipsum text">
              {copySuccess ? (
                <>
                  Copied <FaCheck />
                </>
              ) : (
                <>
                  Copy all <FaCopy />
                </>
              )}
            </ButtonMainCta>
          </div>
        )}
      </div>

      <div className="text-gray-900 dark:text-gray-100">
        <div className="mb-4">
          <h2 className="text-2xl font-bold md:text-3xl">Understanding Hashing</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Hashing is a process that converts your input text into a fixed-size string of characters, which is typically a hexadecimal number. It's commonly used in various security applications, such as password storage, data integrity verification, and digital signatures.
          </p>
        </div>
        <FAQSection />
      </div>
    </>
  );
}
