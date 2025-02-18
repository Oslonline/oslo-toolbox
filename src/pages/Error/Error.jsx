import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <>
      <h1 className="mt-14">Erreur</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

export default Error;
