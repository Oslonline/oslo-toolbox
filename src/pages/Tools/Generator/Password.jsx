import { useState, useEffect } from "react";
import { FaRedo, FaCopy, FaCheck } from "react-icons/fa";

export default function Password() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(14);
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
    setTimeout(() => setCopied(false), 1000); // Revenir à l'icône de copie après 2 secondes
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <p className="text-gray-500">Generate your password for free up to 128 chars with the choice to add uppercase, lowercase, numbers et special characters.</p>
      </div>
      <div className="flex items-center justify-between rounded-md border-2 gap-8 border-gray-200 p-4">
        <p className="font-mono text-xl">{password}</p>
        <div className="flex gap-4">
          <button onClick={handleCopy}>{copied ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}</button>
          <button onClick={generatePassword}>
            <FaRedo fontSize={24} />
          </button>
        </div>
      </div>
      <div className="rounded-md border-2 border-gray-200 p-4">
        <p className="mb-2 text-lg font-bold">Settings</p>
        <hr className="mb-4" />
        <div className="mb-4">
          <label className="mb-2 block">Length : {length}</label>
          <input type="range" min="4" max="128" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" />
            Include uppercase
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" />
            Include lowercase
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
  );
}
