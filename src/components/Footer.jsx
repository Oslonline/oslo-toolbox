import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-2 px-2 pb-2">
      <hr className="bg-radial-gradient my-4 h-0.5 w-2/3 rounded-full border-none md:w-1/2" />
      <div className="mt-4 flex w-full justify-around">
        <div className="dark:text-text-border-light text-text-border-dark flex gap-2">
          <Link className="hover:text-accent underline duration-75" to={"/about"}>
            About
          </Link>
          <Link className="hover:text-accent underline duration-75" to={"/changelogs"}>
            Changelogs
          </Link>
          <Link className="hover:text-accent underline duration-75" target="_blank" to={"https://github.com/Oslonline/oslo-toolbox/issues"}>
            Current issues & bugs
          </Link>
          <Link className="hover:text-accent underline duration-75" target="_blank" to={"https://github.com/Oslonline/oslo-toolbox"}>
            Contribute
          </Link>
        </div>
      </div>
      <div className="text-text-border-dark dark:text-text-border-light flex flex-col items-center">
        <p>
          Oslo's Toolbox - {new Date().getFullYear()} - by{" "}
          <Link className="text-accent underline" to={"https://github.com/Oslonline"}>
            Oslo418
          </Link>
        </p>
      </div>
    </footer>
  );
}
