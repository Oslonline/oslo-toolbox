import { useState } from "react";
import CryptoJS from "crypto-js";
import { FaCheck, FaCopy } from "react-icons/fa";
import { Helmet } from "react-helmet";
import FAQSection from "../../../components/commons/Faq";

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

  const faqData = [
    {
      question: "What is the purpose of hashing?",
      answer: "Hashing is used to ensure data integrity and secure storage of sensitive information like passwords. It converts your input into a fixed-size string that cannot be easily reversed.",
    },
    {
      question: "What's the difference between MD5 and SHA algorithms?",
      answer: "MD5 is faster but less secure than SHA-256 and SHA-512, which offer higher security but require more processing power. SHA-1 is an older algorithm that is less commonly used due to vulnerabilities.",
    },
    {
      question: "Can I reverse a hash to get the original text?",
      answer: "No, hashing is a one-way process, meaning you cannot reverse the hash to retrieve the original text. This makes it ideal for storing passwords securely.",
    },
    {
      question: "Is it safe to use the same hash function for all my data?",
      answer: "While you can use the same hash function, it's crucial to use a salt (a random value added to the input) to enhance security, especially when hashing passwords.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <Helmet>
        <title>Free Hash Generator - Create MD5, SHA-1, SHA-256, and More</title>
        <meta name="description" content="Easily generate secure hashes for your text using MD5, SHA-1, SHA-256, SHA-512, and more. Ideal for developers and security enthusiasts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/Hash" />
      </Helmet>

      <div>
        <p className="text-gray-600 dark:text-gray-400">Generate secure hashes for your text using algorithms like MD5, SHA-1, SHA-256, and SHA-512. Simply input your text, choose the hash type, and click Generate !</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
        <div className="flex flex-col items-center justify-between gap-2 rounded-md border-2 border-gray-200 bg-white p-4 md:flex-row md:gap-4 dark:border-gray-800 dark:bg-gray-950">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full rounded-md border-2 border-gray-200 bg-white p-2 caret-orange-400 outline-hidden focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950"
              aria-label="Input text for hashing"
            />
            <p className="font-semibold">TO</p>
            <select value={hashType} onChange={(e) => setHashType(e.target.value)} className="rounded-md border-2 border-gray-200 bg-white p-2 focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950" aria-label="Select hash algorithm">
              <option value="MD5">MD5</option>
              <option value="SHA-1">SHA-1</option>
              <option value="SHA-256">SHA-256</option>
              <option value="SHA-512">SHA-512</option>
            </select>
          </div>
          <button onClick={handleGenerateHash} className="w-full rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600 md:w-fit dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200" aria-label="Generate hash">
            Generate
          </button>
        </div>

        {hash && (
          <div className="flex flex-col rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
            <p className="text-lg">Result :</p>
            <span className="flex justify-between gap-4">
              <p className="w-full break-words rounded-md border-2 border-gray-200 p-2 dark:border-gray-800">{hash}</p>
              <button className="dark:text-gray-300" onClick={handleCopy} aria-label={copySuccess ? "Hash copied!" : "Copy hash"}>
                {copySuccess ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}
              </button>
            </span>
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
        <FAQSection faqs={faqData} />
      </div>
    </div>
  );
}
