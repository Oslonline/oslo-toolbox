import React from "react";

function About() {
  return (
    <div className="flex flex-col gap-9 p-6">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">About</p>
        <div className="ml-2">
          <p className="text-gray-800">This toolbox is fully open-source and fully client-side for now.</p>
          <p className="text-gray-800">
            The source code can be found on github at :{" "}
            <a className="text-blue-500 underline hover:text-blue-400 focus:text-blue-600" target="_blank" href="https://github.com/Oslonline/oslo-toolbox">
              Oslonline/oslo-toolbox
            </a>
          </p>
          <p className="text-gray-800">This toolbox was made with ReactJS, TailwindCSS and some libs (check the github)</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Contact</p>
        <p className="ml-2 text-gray-800">
          {" "}
          For any inquiries you can contact me on Twitter{" "}
          <a href="https://twitter.com/Oslo418" className="text-blue-500 underline hover:text-blue-400 focus:text-blue-600">
            @Oslo418
          </a>
        </p>
      </div>
      <div id="contact"></div>
    </div>
  );
}

export default About;
