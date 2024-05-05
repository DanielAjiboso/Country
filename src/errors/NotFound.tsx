import { GoArrowDownLeft } from "react-icons/go";
import { Link } from "react-router-dom";
const Notfound: React.FC = () => {
  return (
    <div className="flex mt-24">
      <div className="m-auto bg-blue-800 w-5/6 rounded-2xl flex flex-col gap-20 ">
        <p className="text-9xl text-center mt-96 text-white ">Page Not found</p>

        <Link to="/">
          <p className="text-center mb-96 text-4xl bg-blue-600 w-1/4 m-auto flex rounded-lg h-24 text-white ">
            <div className="m-auto flex">
              <span>
                <GoArrowDownLeft size={"3rem"} />
              </span>
              <span>Back to Homepage</span>
            </div>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
