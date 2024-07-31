import ToolsCard from "../../components/Homepages/ToolsCard";

const tools = [
    { name: "CSS generators", link: "/Css", text: "Gradient, Box-shadow...", icon: "/images/tools-ctg/css.png" },
    { name: "Units converters", link: "/UnitsConvert", text: "Length, Mass, Area...", icon: "/images/tools-ctg/convert.png" },
    { name: "Misc Generators", link: "/Generators", text: "Password, Lorem...", icon: "/images/tools-ctg/gen.png" },
];

function HomeSection({ title, content }) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-4xl text-gray-900">{title}</p>
            <p className="text-gray-700">{content}</p>
        </div>
    );
}

function Home() {
    return (
        <div className="flex flex-col gap-9 p-6">
            <HomeSection
                title="Welcome to our Toolbox Hub!"
                content="Welcome to our versatile collection of tools designed to simplify your digital endeavors. Whether you're a seasoned developer, a curious hobbyist, or someone in need of quick solutions, our toolbox has something for everyone. Explore our range of tools, from various css generators to units converters for mass, length... and embark on a journey of creativity and efficiency."
            />
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">Tools categories :</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {tools.map((tool, index) => (
                        <ToolsCard key={index} {...tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
