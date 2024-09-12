import { Helmet } from "react-helmet";
import ToolsCard from "../../components/Homepages/ToolsCard";

const tools = [
  {
    name: "Generators",
    link: "/Generators",
    text: "Password, Lorem, QR Code...",
    icon: "/images/tools-ctg/gen.webp",
  },
  {
    name: "Files converters",
    link: "/FilesConvert",
    text: "Images (PNG, JPG, WEBP...)",
    icon: "/images/tools-ctg/files.webp",
  },
  {
    name: "Units converters",
    link: "/UnitsConvert",
    text: "Length, Mass, Area, Volume...",
    icon: "/images/tools-ctg/units.webp",
  },
  {
    name: "Security tools",
    link: "/Security",
    text: "IP Lookup, Hash generator...",
    icon: "/images/tools-ctg/sec.webp",
  },
  {
    name: "CSS tools",
    link: "/Css",
    text: "Gradient, Box-shadow...",
    icon: "/images/tools-ctg/css.webp",
  },
];

function HomeSection({ title, content }) {
  return (
    <div className="flex flex-col gap-2 text-gray-900 dark:text-gray-50">
      <p className="text-4xl font-semibold ">{title}</p>
      <p className="">{content}</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Helmet>
        <title>Oslo's Toolbox - Free Online Tools for Developers and More</title>
        <meta name="description" content="Discover Oslo's Toolbox - a free online toolkit offering CSS generators, unit converters, security tools, and more. Simplify your digital tasks today!" />
        <meta name="keywords" content="free online tools, CSS generators, unit converters, security tools, QR code generator, password generator, developer tools" />
        <link rel="canonical" href="https://oslo-toolbox.vercel.app.com" />
      </Helmet>

      <div className="flex flex-col gap-9 p-4 md:p-6">
        <HomeSection
          title="Welcome to Oslo's Toolbox!"
          content="Explore a versatile collection of tools designed to simplify your digital endeavors. Whether you're a seasoned developer or a curious hobbyist, Oslo's Toolbox has something for everyone. From CSS generators like Gradient and Box-Shadow, to practical tools like Unit Converters, QR Code Generators, and Security Tools, you'll find everything you need for creativity and efficiency."
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Tools categories :</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool, index) => (
              <ToolsCard key={index} {...tool} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Frequently Asked Questions</h2>
          <div className="mt-4 text-gray-800 dark:text-gray-200">
            <h3 className="font-semibold">What tools can I find on Oslo's Toolbox?</h3>
            <p className="text-gray-600 dark:text-gray-400">Oslo's Toolbox offers a variety of free online tools including CSS generators for gradients and shadows, unit converters, password generators, QR code generators, and security tools like IP lookup.</p>

            <h4 className="mt-4 font-semibold">Are these tools free to use?</h4>
            <p className="text-gray-600 dark:text-gray-400">Yes, all the tools available on Oslo's Toolbox are completely free to use with no hidden costs.</p>

            <h5 className="mt-4 font-semibold">Do I need to sign up to use the tools?</h5>
            <p className="text-gray-600 dark:text-gray-400">No, you can use all the tools on Oslo's Toolbox without any need to sign up or provide personal information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
