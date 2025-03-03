import { useState } from "react";
import { Helmet } from "react-helmet";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";
import FAQSection from "../../../components/Faq";
import ButtonMainCta from "../../../components/ui/ButtonMainCta";

export default function Uuid() {
  const [uuid, setUuid] = useState("");
  const [version, setVersion] = useState("v4");
  const [copied, setCopied] = useState(false);

  const generateUuid = () => {
    let newUuid;
    switch (version) {
      case "v1":
        newUuid = uuidv1();
        break;
      case "v4":
      default:
        newUuid = uuidv4();
        break;
    }
    setUuid(newUuid);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (uuid) {
      try {
        await navigator.clipboard.writeText(uuid);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>UUID Generator Tool - Generate Unique IDs | Oslo Toolbox</title>
        <meta name="description" content="Generate UUIDs (v1 and v4) with our free UUID Generator tool. Create unique identifiers instantly and copy them to your clipboard with ease." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app/Tools/Uuid" />
      </Helmet>

      <div className="bg-text-dark border-border-light dark:border-border-dark dark:bg-text-base flex w-full flex-col rounded-lg border-2 p-4 md:p-6">
        <div className="flex w-full flex-col gap-2 md:flex-row md:justify-between md:gap-4">
          <select className="dark:border-border-dark focus:border-accent dark:bg-dark bg-light border-border-light w-full rounded-md border-2 p-2 outline-hidden md:w-1/3" value={version} onChange={(e) => setVersion(e.target.value)} aria-label="UUID version">
            <option value="v4">UUID v4 (Random)</option>
            <option value="v1">UUID v1 (Time-based)</option>
          </select>
          <ButtonMainCta onClick={generateUuid} aria-label="Generate UUID">
            Generate
          </ButtonMainCta>
        </div>
        {uuid && (
          <div className="border-border-light dark:border-border-dark dark:bg-dark bg-light mt-4 rounded-md border-2 p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <p className="break-all dark:text-zinc-300">{uuid}</p>
              <button onClick={copyToClipboard} className="dark:border-border-dark dark:bg-dark bg-light border-border-light rounded-md border-2 px-3 py-1 text-sm text-zinc-900 hover:cursor-pointer hover:bg-zinc-200 dark:text-zinc-100 dark:hover:bg-zinc-800" aria-label="Copy UUID to clipboard">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>

      <FAQSection />
    </>
  );
}
