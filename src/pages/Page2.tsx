import { Link, useParams } from "react-router-dom";
import { CountryInfo } from "../CountryInfo";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import { useUser } from "../Layout/RootLayout";

const Page2 = function () {
  const { darkMode } = useUser();
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState<CountryInfo>();
  // https://restcountries.com/v3.1/name/{name}
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => setCountryDetails(res.data[0]));
  }, []);
  console.log(countryDetails);

  // const obj =
  //   countryDetails?.languages && Object.values(countryDetails.languages);

  // console.log(obj?.join(","));
  // console.log(countryDetails?.borders);

  return (
    <div className="min-h-screen space-y-12">
      <Link to={"/"}>
        <button className="shadow-2xl py-2 px-4 ml-2 bg-gray-500 rounded-md text-white flex gap-2 ">
          <AiOutlineArrowLeft size={"20px"} />
          <span className="text-2xl">Back</span>
        </button>
      </Link>
      <div className=" ml-24 flex gap-28">
        <img
          src={countryDetails?.flags.png}
          alt={"country flag"}
          className="  size-3/6"
        />

        <div className="flex flex-col">
          <p className="mb-8 text-6xl">
            <strong>{countryDetails?.name.common}</strong>
          </p>
          <div className="flex gap-24 text-xl">
            <div className="flex flex-col gap-6">
              <p>
                <strong>Official Name:</strong> {countryDetails?.name.official}
              </p>
              <p>
                {" "}
                <strong>Region: </strong> {countryDetails?.region}
              </p>
              <p>
                {" "}
                <strong>Sub Region:</strong>
                {countryDetails?.subregion}
              </p>
              <p>
                {" "}
                <strong>Capital:</strong> {countryDetails?.capital}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <p>
                {" "}
                <strong>Top Level Domain:</strong> {countryDetails?.tld}
              </p>
              <p>
                <strong>Currency:</strong>{" "}
                {countryDetails?.currencies &&
                  Object.values(countryDetails?.currencies)[0].name}{" "}
                (
                {countryDetails?.currencies &&
                  Object.values(countryDetails?.currencies)[0].symbol}
                )
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {countryDetails?.languages &&
                  Object.values(countryDetails.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-14 decoration-solid">
            <span className="text-xl">
              <strong>Border Countries:</strong>
            </span>
            {countryDetails?.borders.map((con) => (
              <div className="shadow-2xl py-2 px-4 ml-2 bg-slate-300  rounded-md text-black  text-center">
                {con}
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

// export const countryLoader = async () => {
//   const { name } = useParams();
//   const res = await fetch(`https://restcountries.com/v3.1/${name}`);
//   return res.json();
// };
