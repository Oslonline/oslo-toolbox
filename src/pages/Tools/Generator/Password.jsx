import { useState, useEffect } from "react";
import { FaRedo, FaCopy, FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";
import FAQSection from "../../../components/commons/Faq";

export default function Password() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()+~`}{[]:;?><,.-=";

    let characterPool = "";
    if (includeUppercase) characterPool += upperCaseLetters;
    if (includeLowercase) characterPool += lowerCaseLetters;
    if (includeNumbers) characterPool += numbers;
    if (includeSymbols) characterPool += symbols;
    if (characterPool === "") return "";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, []);

  const faqData = [
    {
      question: "How long should my password be ?",
      answer: "It's recommended to use a password of at least 12 characters for optimal security. Longer passwords are even more secure.",
    },
    {
      question: "Should I include special characters in my password ?",
      answer: "Yes, including special characters increases the complexity of your password, making it harder to crack.",
    },
    {
      question: "How often should I change my passwords ?",
      answer: "No, using the same password for multiple accounts increases the risk of a security breach. Always use unique passwords for different accounts.",
    },
    {
      question: "Can I use the same password for multiple accounts ?",
      answer: "No, using the same password for multiple accounts increases the risk of a security breach. Always use unique passwords for different accounts.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <Helmet>
        <title>Secure Password Generator - Create Strong Passwords for Free</title>
        <meta name="description" content="Generate secure passwords up to 128 characters with options to include uppercase letters, lowercase letters, numbers, and special characters. Perfect for safeguarding your online accounts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/Password" />
      </Helmet>

      <div>
        <p className="text-gray-600">Generate your password for free up to 128 characters with the option to include uppercase letters, lowercase letters, numbers, and special characters.</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
        <div className="flex items-center justify-between gap-4 rounded-md border-2 border-gray-200 bg-white p-4 md:gap-8 dark:border-gray-800 dark:bg-gray-950">
          <input
            className="w-full rounded-md border-2 border-gray-200 bg-white p-2 font-mono caret-orange-400 outline-none selection:bg-orange-400 selection:text-gray-50 focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950 dark:caret-orange-600 dark:focus:border-orange-600"
            type="text"
            readOnly
            value={password}
          />
          <div className="flex gap-4 dark:text-gray-300">
            <button onClick={handleCopy} aria-label={copied ? "Password copied!" : "Copy password"}>
              {copied ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}
            </button>
            <button onClick={generatePassword} aria-label="Generate a new password">
              <FaRedo fontSize={24} />
            </button>
          </div>
        </div>
        <div className="rounded-md border-2 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
          <p className="mb-2 text-lg font-bold">Settings</p>
          <hr className="mb-4" />
          <div className="mb-4">
            <label className="mb-2 block">Length: {length}</label>
            <input type="range" min="12" max="128" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-full accent-orange-400 dark:accent-orange-600" aria-label="Password length" />
          </div>
          <div className="flex flex-col gap-2 accent-orange-400 dark:accent-orange-600">
            <label className="flex items-center">
              <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" />
              Include uppercase letters
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" />
              Include lowercase letters
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" />
              Include numbers
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" />
              Include special characters
            </label>
          </div>
        </div>
      </div>
      <FAQSection faqs={faqData} />
    </div>
  );
}
