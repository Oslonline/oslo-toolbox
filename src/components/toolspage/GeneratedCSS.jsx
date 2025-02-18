import ButtonMainCta from "../ui/ButtonMainCta";
import { FaCheck } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

function GeneratedCSS({ result, copySuccess, copyToClipboard }) {
  return (
    <div className="border-border-light bg-text-dark dark:bg-text-base dark:border-border-dark dar:bg-black flex w-full flex-col gap-3 rounded-md border-2 p-4">
      <code className="text-text-base dark:text-text-dark">
        <span className="select-none">{"> "}</span>
        {result}
      </code>
      <ButtonMainCta onClick={copyToClipboard} className="flex w-fit items-center gap-2 text-sm" aria-label="Copy Lorem Ipsum text">
        {copySuccess ? (
          <>
            Copied <FaCheck />
          </>
        ) : (
          <>
            Copy css <FaCopy />
          </>
        )}
      </ButtonMainCta>
    </div>
  );
}

export default GeneratedCSS;
