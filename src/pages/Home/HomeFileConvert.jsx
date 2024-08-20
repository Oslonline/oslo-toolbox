import ToolsCard from "../../components/Homepages/ToolsCard";

const filesTools = [
  {
    name: "Images converter",
    link: "/FilesConvert/Images",
    text: "Convert between PNG, JPG, WEBP, GIF, BMP & SVG.",
    icon: "/images/files-convert-tools/images.webp",
  },
];

function HomeFileConvert() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Discover all our CSS generators tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filesTools.map((tool, index) => (
          <ToolsCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default HomeFileConvert;
