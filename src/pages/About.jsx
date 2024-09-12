import React from "react";

function About() {
  return (
    <div className="flex flex-col gap-9 p-4 text-gray-900 md:p-6 dark:text-gray-100">
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-3xl font-bold">About</p>
          <p className="mb-4 mt-2">
            <span className="font-semibold">Oslo Toolbox </span> is an open-source collection of handy tools built with ReactJS and TailwindCSS, currently under development. This toolbox is designed to streamline various tasks for developers and designers, providing essential utilities in one
            convenient package. It offers a user-friendly interface and powerful features.
          </p>
        </div>
        <div>
          <p className="mb-2 text-3xl font-bold">Features</p>
          <ul className="ml-4 list-disc">
            <li>
              <span className="mt-2 font-semibold">CSS Box-shadow Generator:</span> Create visually striking and customizable box shadows with ease.
            </li>
            <li className="mt-1">
              <span className="font-semibold">CSS Background Gradient Generator:</span> Easily generate vibrant and dynamic gradients to enhance web designs with depth and visual appeal.
            </li>
            <li className="mt-1">
              <span className="font-semibold">File Converters:</span> Convert various image formats, including PNG, JPG, WEBP, SVG, and BMP, ensuring compatibility across different platforms and applications.
            </li>
            <li className="mt-1">
              <span className="font-semibold">Unit Converters: </span> Cover a wide range of measurements such as mass, length, volume, temperature, area, speed, and time. This feature is invaluable for professionals in various fields.
            </li>
            <li className="mt-1">
              <span className="font-semibold">Password Generator:</span> Generate strong, randomized passwords tailored to user preferences for enhanced security and personalization.
            </li>
            <li className="mt-1">
              <span className="font-semibold">Lorem Ipsum Generator:</span> Simplify the process of adding placeholder text to designs, facilitating faster prototyping and content creation.
            </li>
            <li className="mt-1">
              <span className="font-semibold">QR Code Generator:</span> Transform text or links into scannable QR codes, enabling efficient sharing of information.
            </li>
            <li className="mt-1">
              <span className="font-semibold">Hash Generator:</span> Securely generate unique identifiers from text, useful for data management and authentication purposes.
            </li>
            <li className="mt-1">
              <span className="font-semibold">GitHub README.md Generator: </span>
              Automatically create a professional-looking README file, complete with sections for project description, installation instructions, usage examples, and contributor guidelines. This saves time and ensures consistency across multiple projects.
            </li>
            <li className="mt-1">
              <span className="font-semibold">IP Address Lookup:</span> Quickly retrieve information about a specific IP address, including its geographic location and associated details. This can be valuable for troubleshooting network issues, monitoring website traffic, or conducting security
              audits.
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <p className="mt-2">
            <span className="font-semibold ">Overall</span>, this open-source toolbox is an exceptional resource for web developers, offering a comprehensive and user-friendly platform that simplifies a variety of web development tasks. With its intuitive interface and responsive design, it ensures
            optimal usability on larger screens, making it accessible for users at all skill levels. By streamlining workflows and integrating essential tools, it empowers developers to focus on creating high-quality web experiences, ultimately enhancing productivity and efficiency. This toolbox is
            truly a valuable asset for anyone looking to elevate their web development projects.
          </p>
          <p className="mt-2">
            The source code can be found on github at :{" "}
            <a className="text-blue-500 underline hover:text-blue-400 focus:text-blue-600" target="_blank" href="https://github.com/Oslonline/oslo-toolbox">
              Oslonline/oslo-toolbox
            </a>
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-3xl font-bold">Contact</p>
          <p className="">
            For any inquiries or assistance, please feel free to reach out to me on Twitter authentication{" "}
            <a href="https://twitter.com/Oslo418" className="text-blue-500 underline hover:text-blue-400 focus:text-blue-600">
              @Oslo418
            </a>{" "}
            I look forward to connecting with you !
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
