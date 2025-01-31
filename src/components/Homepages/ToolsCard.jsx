import { Link } from "react-router-dom";

function ToolsCard({ name, text, link, icon }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-gray-50 p-3 dark:bg-gray-900 dark:border-gray-700">
      <div>
        <img className="size-24 rounded-md md:size-32" src={icon} alt="Tool icon" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="container">
          <p className="text-center text-lg font-semibold">{name}</p>
          <p className="text-center line-clamp-1 text-gray-500 dark:text-gray-400">{text}</p>
        </div>
        <Link to={link} className="flex w-fit rounded-lg bg-orange-400 px-3 py-2 text-gray-50 duration-200 hover:bg-orange-600 focus:bg-gray-800 focus:text-gray-50 dark:bg-orange-600 dark:hover:bg-orange-400 dark:hover:text-gray-200">
          Check this tool
        </Link>
      </div>
    </div>
  );
}

export default ToolsCard;
