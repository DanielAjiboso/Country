import { Link, useParams } from "react-router-dom";
import { CountryInfo } from "../CountryInfo";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";
import { useUser } from "../Layout/RootLayout";
import Loading from "../components/Loading";

const Page2 = function () {
  const { darkMode } = useUser();
  const { name } = useParams();
  // const countryDetails: CountryInfo = useLoaderData() as CountryInfo;
  const [countryDetails, setCountryDetails] = useState<CountryInfo>();
  //restcountries.com/v3.1/name/{name}
  https: useEffect(() => {
    // fetch(`https://restcountries.com/v3.1/name/${name}`)
    //   .then((res) => res.json())
    //   .then((res) => setCountryDetails(res[0]))
    //   .catch((err) => {
    //     alert(`${err} data on ${name}`);
    //   });
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => setCountryDetails(res.data[0]))
      .catch((err) => {
        alert(`${err} data on ${name}`);
      });
  }, []);

  // console.log(countryDetails);

  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  // const obj =
  //   countryDetails?.languages && Object.values(countryDetails.languages);

  // console.log(obj?.join(","));
  // console.log(countryDetails?.borders);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen space-y-12 mt-5">
          <Link to={"/"}>
            <button
              className={`shadow-2xl py-2 px-4 ml-2 rounded-md flex gap-2 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } `}
            >
              <AiOutlineArrowLeft size={"20px"} />
              <span className={`text-2xl `}>Back</span>
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
                    <strong>Official Name:</strong>{" "}
                    {countryDetails?.name.official}
                  </p>
                  <p>
                    <strong>Population</strong>
                    {countryDetails?.population.toLocaleString()}
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
                  <div
                    className={`shadow-2xl py-2 px-4 ml-2  rounded-md  text-center ${
                      darkMode
                        ? "text-white bg-gray-800"
                        : "text-black bg-white"
                    }`}
                  >
                    {con}
                  </div>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;

// export const singleCountryLoader = async () => {
//   const { name } = useParams();
//   const res = await fetch(`https://restcountries.com/v3.1/${name}`);
//   if (!res.ok) {
//     throw Error("Could not fetch the country");
//   }
//   return res.json();
// };
