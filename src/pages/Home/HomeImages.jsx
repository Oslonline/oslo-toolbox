import ToolsCard from "../../components/Homepages/ToolsCard";

const imagesTools = [
  {
    name: "Images converter",
    link: "/FilesConvert/Images",
    text: "Convert between PNG, JPG, WEBP, BMP & SVG.",
    icon: "/images/images-tools/images-converter.webp",
  },
  {
    name: "Dithering/Bitmap effect",
    link: "/Images/Dither",
    text: "Apply a dithering effect (bitmap effect) to an image.",
    icon: "/images/images-tools/dither.webp",
  },
];

function HomeImages() {
  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Discover all our Images editing, altering, and enhancing tools</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {imagesTools.map((tool, index) => (
          <ToolsCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default HomeImages;
