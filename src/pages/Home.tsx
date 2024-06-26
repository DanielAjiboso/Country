import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Country from "../components/Country";
import { CountryInfo } from "../CountryInfo";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { BsArrowDownShort } from "react-icons/bs";
import { useUser } from "../Layout/RootLayout";
import axios from "axios";
// interface CountryTS {
//   name: string;
//   capital: string;
//   region: string;
//   numericCode: number;
//   flags: {
//     png: string;
//     svg: string;
//   };
// }

const Home: React.FC = function () {
  const countryData: CountryInfo[] = useLoaderData() as CountryInfo[];
  const [countries, setCountries] = useState<CountryInfo[]>(countryData);
  const [region, setRegion] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearchQuery, setShowSearchQuery] = useState<boolean>(false);
  const { darkMode } = useUser();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>All Regions</span>,
      onClick: () => setRegion(""),
    },
    {
      key: "2",
      label: <span>Americas</span>,
      onClick: () => setRegion("Americas"),
    },
    {
      key: "3",
      label: <span>Africa</span>,
      onClick: () => setRegion("Africa"),
    },
    {
      key: "4",
      label: <span>Asia</span>,
      onClick: () => setRegion("Asia"),
    },
    {
      key: "6",
      label: <span>Europe</span>,
      onClick: () => setRegion("Europe"),
    },
    {
      key: "7",
      label: <span>Oceania</span>,
      onClick: () => setRegion("Oceania"),
    },
  ];

  useEffect(() => {
    region === ""
      ? axios
          .get(`https://restcountries.com/v3.1/all`)
          .then((res) => setCountries(res.data))
      : axios
          .get(`https://restcountries.com/v3.1/region/${region}`)
          .then((res) => setCountries(res.data));
  }, [region]);

  const searchCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowSearchQuery(true);
  };

  // console.log(searchQuery);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const removeSearched = function () {
    setShowSearchQuery(false);
  };

  return (
    <div className={`w-1440 ml-6 text-lg mt-4 `} onClick={removeSearched}>
      <div className="w-5/6 m-auto ">
        <div className="flex mb-12">
          <input
            type="text"
            placeholder="Search for a country"
            value={searchQuery}
            onChange={searchCountry}
            className={`mr-auto w-1/3 text-3xl h-20 ${
              darkMode ? "text-white bg-gray-800" : "text-black bg-white"
            }`}
            // onClick={showFiltered}
          />

          <div>
            <Dropdown menu={{ items }}>
              <div
                className={`flex gap-2 items-center w-96 h-20  ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } `}
              >
                <div className="m-auto flex gap-2 w-3/4">
                  <span
                    className={`mr-auto text-3xl   ${
                      darkMode ? "text-white" : "text-black "
                    }`}
                  >
                    {" "}
                    Filter By Regions
                  </span>{" "}
                  <BsArrowDownShort size={"22px"} />
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {showSearchQuery &&
            filteredCountries.slice(0, 5).map((country, index) => (
              <Link to={`${country.name.common}`}>
                <li
                  key={index}
                  className={`${
                    darkMode
                      ? "bg-blue-950 text-white"
                      : "bg-grey-100 text-black"
                  } flex mt-4 w-fit  gap-3 `}
                >
                  <img
                    src={country.flags.png}
                    alt=""
                    className=" h-8 outline-none !placeholder-white"
                  />
                  <p>
                    <strong>{country.name.common} </strong>
                  </p>
                </li>
              </Link>
            ))}
        </div>
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-36 w-5/6 m-auto ">
        {countries.slice(0, 8).map((country) => (
          <Link to={`${country.name.official}`}>
            <Country country={country} darkMode={darkMode} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const countryLoader = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  if (!res.ok) {
    throw Error("Could not fetch the countries");
  }

  return res.json();
};
