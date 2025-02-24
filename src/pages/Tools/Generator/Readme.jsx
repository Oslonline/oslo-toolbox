// NEED IMPROVEMENT
// - Markdown handling & download correctly
// - Add more settings (like color, font, etc.)
// - Add more sections
// - etc ...
// -----------------------------------------------------------------

// import { useState } from "react";
// import { Helmet } from "react-helmet";
// import { CiCircleRemove } from "react-icons/ci";
// import { MdAddCircleOutline } from "react-icons/md";
// import FAQSection from "../../../components/Faq";

// export default function ReadmeGenerator() {
//   const [template, setTemplate] = useState("project");
//   const [sections, setSections] = useState([
//     { id: 1, title: "", content: "" },
//     { id: 2, title: "About", content: "" },
//     { id: 3, title: "Run", content: "" },
//   ]);

//   const addSection = () => {
//     setSections([...sections, { id: Date.now(), title: "", content: "" }]);
//   };

//   const updateSection = (id, title, content) => {
//     const updatedSections = sections.map((section) => (section.id === id ? { ...section, title, content } : section));
//     setSections(updatedSections);
//   };

//   const removeSection = (id) => {
//     const updatedSections = sections.filter((section) => section.id !== id);
//     setSections(updatedSections);
//   };

//   const generateReadme = () => {
//     const titleSection = sections[0];
//     const otherSections = sections.slice(1);

//     const titleContent = `# ${titleSection.title}\n\n`;

//     return titleContent + otherSections.map((section) => `## ${section.title}\n\n${section.content}\n`).join("\n");
//   };

//   const downloadReadme = () => {
//     const element = document.createElement("a");
//     const file = new Blob([generateReadme()], { type: "text/markdown" });
//     element.href = URL.createObjectURL(file);
//     element.download = "README.md";
//     document.body.appendChild(element);
//     element.click();
//   };

//   const switchTemplate = () => {
//     if (template === "project") {
//       setTemplate("profile");
//       setSections([
//         { id: 1, title: "" },
//         { id: 2, title: "Introduction", content: "" },
//         { id: 3, title: "Skills", content: "- \n- \n- \n" },
//       ]);
//     } else {
//       setTemplate("project");
//       setSections([
//         { id: 1, title: "" },
//         { id: 2, title: "About", content: "" },
//         { id: 3, title: "Run", content: "" },
//       ]);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Free Github Readme Generator - Create and Customize Your README Instantly</title>
//         <meta name="description" content="Easily generate a custom README.md for your GitHub repository. Add your project title, description, installation instructions, usage instructions, and more." />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href="https://oslo-toolbox.vercel.app.com/Generators/Readme" />
//       </Helmet>

//       <div className="flex flex-col gap-4 rounded-md md:border-2 md:border-gray-200 md:bg-gray-50 md:p-6 dark:md:border-gray-800 dark:md:bg-gray-900">
//         <div className="flex flex-col items-center justify-between gap-4 rounded-md border-2 border-gray-200 bg-white p-3 md:flex-row md:p-4 dark:border-gray-800 dark:bg-gray-950">
//           <label className="flex items-center gap-2">
//             <p className="text-xs text-gray-500 md:text-sm md:uppercase">Project readme</p>
//             <input type="checkbox" className="hidden" checked={template === "profile"} onChange={switchTemplate} />
//             <div className="relative inline-block w-10 align-middle transition duration-200 ease-in select-none md:w-14">
//               <div className={`toggle-bg block h-6 w-10 rounded-full border-2 border-gray-200 bg-gray-300 shadow-inner md:h-8 md:w-14 dark:border-gray-800 dark:bg-gray-800 ${template === "profile" ? "border-orange-400 duration-200 dark:border-orange-600" : "duration-200"}`}></div>
//               <div className={`dot absolute top-1 left-1 h-4 w-4 rounded-full border-2 border-gray-200 bg-gray-50 shadow-sm transition md:h-6 md:w-6 dark:border-gray-400 dark:bg-gray-900 ${template === "profile" ? "translate-x-full transform bg-orange-400 dark:bg-orange-600" : ""}`}></div>
//             </div>
//             <p className="text-xs text-gray-600 md:text-sm md:uppercase">Profile readme</p>
//           </label>
//           <button onClick={downloadReadme} className="rounded-md bg-orange-400 px-2 py-1.5 text-gray-50 duration-200 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200">
//             Download README
//           </button>
//         </div>

//         <div className="flex flex-col gap-4 rounded-md border-2 border-gray-200 bg-white p-3 md:p-4 dark:border-gray-800 dark:bg-gray-950">
//           <input
//             type="text"
//             placeholder={template === "project" ? "Project Title" : "Profile Name"}
//             value={sections[0].title}
//             onChange={(e) => updateSection(sections[0].id, e.target.value, sections[0].content)}
//             className="rounded-md border-2 border-gray-200 bg-white p-2 text-gray-900 caret-orange-400 outline-hidden focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:caret-orange-600 dark:focus:border-orange-600"
//           />

//           {sections.slice(1).map((section, index) => (
//             <div key={section.id} className="flex gap-2">
//               <div className="flex w-full flex-col gap-2">
//                 <div className="flex w-full gap-2 md:gap-0">
//                   <input
//                     type="text"
//                     placeholder="Section Title"
//                     value={section.title}
//                     onChange={(e) => updateSection(section.id, e.target.value, section.content)}
//                     className="w-full rounded-md border-2 border-gray-200 bg-white p-2 text-gray-900 caret-orange-400 outline-hidden focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:caret-orange-600 dark:focus:border-orange-600"
//                   />
//                   <button onClick={() => removeSection(section.id)} className="rounded-md border-2 border-gray-200 px-2 text-gray-300 duration-200 hover:border-gray-400 hover:bg-gray-400 hover:text-gray-50 md:hidden">
//                     <CiCircleRemove fontSize={23} />
//                   </button>
//                 </div>
//                 <textarea
//                   placeholder="Section Content"
//                   value={section.content}
//                   onChange={(e) => updateSection(section.id, section.title, e.target.value)}
//                   className="min-h-16 rounded-md border-2 border-gray-200 bg-white p-2 text-gray-900 caret-orange-400 outline-hidden focus:border-orange-400 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:caret-orange-600 dark:focus:border-orange-600"
//                   rows="2"
//                 ></textarea>
//               </div>
//               <button onClick={() => removeSection(section.id)} className="hidden rounded-md border-2 border-gray-200 px-2 text-gray-300 duration-200 hover:border-gray-400 hover:bg-gray-400 hover:text-gray-50 md:block dark:border-gray-800">
//                 <CiCircleRemove fontSize={38} />
//               </button>
//             </div>
//           ))}
//           <button onClick={addSection} className="flex items-center justify-center gap-2 rounded-md bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200">
//             <MdAddCircleOutline /> Add Custom Section
//           </button>
//         </div>
//       </div>

//       <FAQSection />
//     </>
//   );
// }
