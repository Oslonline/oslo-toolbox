import React from "react";
import { Link } from "react-router-dom";
import ButtonMainCta from "../../components/ui/ButtonMainCta";
import ButtonNeutralCta from "../../components/ui/ButtonNeutralCta";

export default function Error404() {
  return (
    <div className="flex h-screen max-h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-2 md:gap-4 text-center">
        <h1 className="flex w-full justify-center gap-2 text-center text-6xl font-bold sm:text-7xl">
          Error <p className="text-accent">404</p>
        </h1>
        <h2 className="font-bold md:text-2xl lg:text-3xl xl:text-4xl">Your on the wrong path, nothing exist here !</h2>
        <div className="flex w-full justify-center gap-4">
          <ButtonMainCta to={"/"}>Home</ButtonMainCta>
          <ButtonNeutralCta to={"https://github.com/Oslonline/oslo-toolbox"}>Github repo</ButtonNeutralCta>
        </div>
      </div>

      <div className="fixed bottom-0 w-full text-center">
        <p className="p-2 font-mono">
          Oslo's Toolbox -{" "}
          <Link className="text-accent underline" to={"/"}>
            Home
          </Link>
          {" - "}
          <Link className="text-accent underline" to={"https://github.com/Oslonline/oslo-toolbox"}>
            Github Repo
          </Link>{" "}
          - {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
