import React from "react";
import { BsCopy } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

function GeneratedCSS({ result, copySuccess, copyToClipboard }) {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-black p-4 shadow-md">
      <code className="text-gray-50">
        <span className="select-none">{"> "}</span>
        {result}
      </code>
      <button
        className={`flex w-fit items-center gap-2 rounded-md hover:bg-gray-500  hover:text-gray-100 active:bg-gray-600 ${copySuccess ? "bg-orange-400 hover:bg-orange-400 hover:text-gray-950 dark:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-gray-50 " : "bg-gray-300 dark:bg-gray-700"} px-3 py-1`}
        onClick={copyToClipboard}
      >
        {copySuccess ? <FaCheck /> : <BsCopy />}
        <p>{copySuccess ? "Copied" : "Copy"}</p>
      </button>
    </div>
  );
}

export default GeneratedCSS;
