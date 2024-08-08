import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CiCircleRemove } from "react-icons/ci";
import { FaCheck, FaCopy } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";

export default function ReadmeGenerator() {
  const [copied, setCopied] = useState(false);
  const [template, setTemplate] = useState("project");
  const [sections, setSections] = useState([
    { id: 1, title: "", content: "" },
    { id: 2, title: "About", content: "" },
    { id: 3, title: "Run", content: "" },
  ]);

  const addSection = () => {
    setSections([...sections, { id: Date.now(), title: "", content: "" }]);
  };

  const updateSection = (id, title, content) => {
    const updatedSections = sections.map((section) => (section.id === id ? { ...section, title, content } : section));
    setSections(updatedSections);
  };

  const removeSection = (id) => {
    const updatedSections = sections.filter((section) => section.id !== id);
    setSections(updatedSections);
  };

  const generateReadme = () => {
    const titleSection = sections[0];
    const otherSections = sections.slice(1);

    const titleContent = `# ${titleSection.title}\n\n`;

    return titleContent + otherSections.map((section) => `## ${section.title}\n\n${section.content}\n`).join("\n");
  };

  const downloadReadme = () => {
    const element = document.createElement("a");
    const file = new Blob([generateReadme()], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateReadme());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const switchTemplate = () => {
    if (template === "project") {
      setTemplate("profile");
      setSections([
        { id: 1, title: "" },
        { id: 2, title: "Introduction", content: "" },
        { id: 3, title: "Skills", content: "- \n- \n- \n" },
      ]);
    } else {
      setTemplate("project");
      setSections([
        { id: 1, title: "" },
        { id: 2, title: "About", content: "" },
        { id: 3, title: "Run", content: "" },
      ]);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <Helmet>
        <title>Free Github Readme Generator - Create and Customize Your README Instantly</title>
        <meta name="description" content="Easily generate a custom README.md for your GitHub repository. Add your project title, description, installation instructions, usage instructions, and more." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        <p className="text-gray-500">Generate your GitHub repository README.md for free. Enter your project title, description, installation instructions, usage instructions, and add custom sections as needed. When you're done, you can copy or download your README!</p>
      </div>

      <div className="flex flex-col gap-4 rounded-md border-2 border-gray-200 bg-gray-50 p-6">
        <div className="flex items-center justify-between gap-4 rounded-md border-2 border-gray-200 bg-white p-4">
          <label className="flex items-center gap-2">
            <p className="text-sm uppercase text-gray-500">Project readme</p>
            <input type="checkbox" className="hidden" checked={template === "profile"} onChange={switchTemplate} />
            <div className="relative mr-2 inline-block w-14 select-none align-middle transition duration-200 ease-in">
              <div className="toggle-bg block h-8 w-14 rounded-full border-2 border-gray-200 bg-gray-300 shadow-inner"></div>
              <div className={`dot absolute left-1 top-1 h-6 w-6 rounded-full border-2 border-gray-200 bg-gray-50 shadow transition ${template === "profile" ? "translate-x-full transform bg-orange-400" : ""}`}></div>
            </div>
            <p className="text-sm uppercase text-gray-500">Profile readme</p>
          </label>
          <div className="flex gap-4">
            <button onClick={copyToClipboard} aria-label={copied ? "Password copied!" : "Copy password"}>
              {copied ? <FaCheck fontSize={24} color="green" /> : <FaCopy fontSize={24} />}
            </button>
            <button onClick={downloadReadme} className="rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600">
              Download README
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-md border-2 border-gray-200 bg-white p-4">
          <input
            type="text"
            placeholder={template === "project" ? "Project Title" : "Profile Name"}
            value={sections[0].title}
            onChange={(e) => updateSection(sections[0].id, e.target.value, sections[0].content)}
            className="rounded-md border-2 border-gray-200 bg-white p-2 text-gray-900 caret-orange-400 outline-none focus:border-orange-400"
          />

          {sections.slice(1).map((section, index) => (
            <div key={section.id} className="flex gap-2">
              <div className="flex w-full flex-col gap-2">
                <input type="text" placeholder="Section Title" value={section.title} onChange={(e) => updateSection(section.id, e.target.value, section.content)} className="rounded-md border-2 border-gray-200 bg-white p-2 text-gray-900 caret-orange-400 outline-none focus:border-orange-400" />
                <textarea
                  placeholder="Section Content"
                  value={section.content}
                  onChange={(e) => updateSection(section.id, section.title, e.target.value)}
                  className="min-h-16 rounded-md border-2 border-gray-200 bg-white p-2 text-gray-900 caret-orange-400 outline-none focus:border-orange-400"
                  rows="2"
                ></textarea>
              </div>
              <button onClick={() => removeSection(section.id)} className="rounded-md border-2 border-gray-200 px-2 text-gray-400 duration-200 hover:border-gray-400 hover:bg-gray-400 hover:text-gray-50">
                <CiCircleRemove fontSize={38} />
              </button>
            </div>
          ))}
          <button onClick={addSection} className="flex items-center justify-center gap-2 rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600">
            <MdAddCircleOutline /> Add Custom Section
          </button>
        </div>
      </div>

      <div className="text-gray-900">
        <h2 className="text-3xl font-semibold">Why Use a GitHub README Generator?</h2>
        <p className="mt-2 text-gray-500">Creating a good README file is essential for your project. It helps others understand your project, how to install it, and how to use it. A well-structured README can make your project stand out and encourage others to contribute or use your work.</p>

        <h3 className="my-4 text-3xl font-semibold">Frequently Asked Questions</h3>
        <div className="mt-2">
          <h4 className="font-bold">What is a GitHub README?</h4>
          <p className="text-gray-500">A GitHub README is a markdown file that introduces and explains a project. It usually includes information about the project's purpose, how to set it up, how to use it, and any other relevant details.</p>
        </div>
        <div className="mt-2">
          <h4 className="font-bold">Why is a README important?</h4>
          <p className="text-gray-500">A README is often the first interaction a user has with your project. It provides critical information about your project and can help attract contributors or users.</p>
        </div>
        <div className="mt-2">
          <h4 className="font-bold">Can I add custom sections?</h4>
          <p className="text-gray-500">Yes! You can add as many custom sections as you need. Each section can be tailored to include information specific to your project.</p>
        </div>
        <div className="mt-2">
          <h4 className="font-bold">How do I generate the README?</h4>
          <p className="text-gray-500">Simply fill in the required fields, add any optional sections, and your README will be generated. You can then copy it to your clipboard or download it directly.</p>
        </div>
      </div>
    </div>
  );
}
