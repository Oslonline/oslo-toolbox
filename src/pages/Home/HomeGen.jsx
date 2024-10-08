import ToolsCard from "../../components/Homepages/ToolsCard";

const genTools = [
  {
    name: "Password generator",
    link: "/Generators/Password",
    text: "",
    icon: "/images/gen-tools/password.webp",
  },
  {
    name: "Lorem Ipsum generator",
    link: "/Generators/Lorem",
    text: "",
    icon: "/images/gen-tools/lorem.webp",
  },
  {
    name: "QR Code generator",
    link: "/Generators/QrCode",
    text: "",
    icon: "/images/gen-tools/qr-code.webp",
  },
  {
    name: "Github Readme generator",
    link: "/Generators/Readme",
    text: "",
    icon: "/images/gen-tools/readme.webp",
  },
];

function HomeCss() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Discover all our Generators tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {genTools.map((tool, index) => (
          <ToolsCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default HomeCss;
