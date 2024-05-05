import { IoReload } from "react-icons/io5";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
const CountriesError: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = `${error.message}`;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else [(errorMessage = "Unknown error")];
  return (
    <div className="flex mt-24">
      <div className="m-auto bg-blue-800 w-5/6 rounded-2xl flex flex-col gap-20 ">
        <p className="text-9xl text-center mt-96 text-white ">
          {" "}
          <strong>{errorMessage}</strong>
        </p>

        <Link to="/">
          <p className="text-center mb-96 text-4xl bg-blue-600 w-1/4 m-auto flex rounded-lg h-24 text-white  ">
            <div className="m-auto flex">
              <span>
                {" "}
                <IoReload size={"3rem"} />
              </span>
              <span> Reload</span>
            </div>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CountriesError;
