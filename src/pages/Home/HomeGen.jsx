import ToolsCard from "../../components/Homepages/ToolsCard";

const genTools = [
  {
    name: "Password generator",
    link: "/Generator/Password",
    text: "",
    icon: "/images/gen-tools/password.webp",
  },
  {
    name: "Lorem Ipsum generator",
    link: "/Generator/Password",
    text: "",
    icon: "/images/gen-tools/lorem.webp",
  },
];

function HomeCss() {
  return (
    <div className="flex flex-col gap-9 p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Discover all our Generators tools</h2>
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
