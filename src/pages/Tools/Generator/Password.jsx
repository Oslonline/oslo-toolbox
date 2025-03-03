import { useState, useEffect } from "react";
import { FaRedo, FaCopy, FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet";
import FAQSection from "../../../components/Faq";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";
import ButtonNeutralCta from "../../../components/ui/ButtonNeutralCta";

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

  return (
    <>
      <Helmet>
        <title>Secure Password Generator - Create Strong Passwords for Free</title>
        <meta name="description" content="Generate secure passwords up to 128 characters with options to include uppercase letters, lowercase letters, numbers, and special characters. Perfect for safeguarding your online accounts." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/Password" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col gap-4 rounded-lg border-2 p-4 md:p-6">
        <div className="flex gap-4">
          <input className="border-border-light dark:border-border-dark dark:bg-dark bg-light focus:border-accent caret-accent selection:bg-accent w-full rounded-md border-2 p-2 font-mono outline-hidden" type="text" readOnly value={password} />
          <div className="flex gap-4 dark:text-gray-300">
            <button className="dark:border-border-dark dark:bg-dark bg-light border-border-light rounded-md border-2 px-2 hover:cursor-pointer lg:px-4" onClick={handleCopy} aria-label={copied ? "Password copied!" : "Copy password"}>
              {copied ? "Copied!" : "Copy"}
            </button>
            <ButtonMainCta onClick={generatePassword} aria-label="Generate a new password">
              Generate
            </ButtonMainCta>
          </div>
        </div>
        <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light rounded-md border-2 p-4">
          <p className="mb-2 text-lg font-bold">Settings</p>
          <hr className="mb-4" />
          <div className="mb-4">
            <label className="mb-2 block">Length: {length}</label>
            <input type="range" min="12" max="256" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="accent-accent w-full" aria-label="Password length" />
          </div>
          <div className="accent-accent flex flex-col gap-2">
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

      <FAQSection />
    </>
  );
}
