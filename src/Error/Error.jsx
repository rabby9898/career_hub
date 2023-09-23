import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center my-8 md:my-40" id="error-page">
      <h1 className="text-red-400 text-5xl font-bold">Oops!</h1>
      <p className="text-3xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
