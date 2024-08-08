import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="h-screen max-h-screen w-screen flex items-center justify-center">
      <div className="text-center flex flex-col gap-6">
        <h1 className="font-bold text-6xl sm:text-7xl flex text-center w-full justify-center gap-2">Error <p className="text-orange-400">404</p></h1>
        <h2 className="font-bold text-3xl sm:text-4xl">Your on the wrong path, nothing exist here !</h2>
        <div className="flex w-full justify-center gap-8">
            <Link className="px-2 py-1 text-lg bg-orange-400 hover:bg-orange-600 duration-200 rounded-md text-gray-50" to={"/"}>Home</Link>
            <a className="px-2 py-1 text-lg bg-gray-300 hover:bg-gray-600 hover:text-gray-50 duration-200 rounded-md" href="https://github.com/Oslonline/bingo-portfolio">Github repo</a>
        </div>
      </div>

      <div className="fixed bottom-0 text-center w-full">
        <p className="font-mono p-2">
          Oslo's Toolbox - <Link className="text-orange-400 underline" to={"/"}>Home</Link> - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
