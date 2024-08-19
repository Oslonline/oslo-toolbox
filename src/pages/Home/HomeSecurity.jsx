import ToolsCard from "../../components/Homepages/ToolsCard";

const secTools = [
  {
    name: "Ip Adress Lookup",
    link: "/Security/IpLookup",
    text: "",
    icon: "/images/sec-tools/ip.webp",
  },
  {
    name: "Hash generator",
    link: "/Security/Hash",
    text: "",
    icon: "/images/sec-tools/hash.webp",
  },
];

function HomeSecurity() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Discover all our Security tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {secTools.map((tool, index) => (
          <ToolsCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default HomeSecurity;
