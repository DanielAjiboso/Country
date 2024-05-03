import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Country from "../components/Country";
import { CountryInfo } from "../CountryInfo";
import { Dropdown, Input } from "antd";
import type { MenuProps } from "antd";
import { BsArrowDownShort } from "react-icons/bs";
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
  const displayCountries = countryData.slice(0, 8);
  const [countries, setCountries] = useState<CountryInfo[]>(displayCountries);
  const [region, setRegion] = useState<string>();
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
          .then((res) => setCountries(res.data.slice(0, 8)))
      : axios
          .get(`https://restcountries.com/v3.1/region/${region}`)
          .then((res) => setCountries(res.data.slice(0, 8)));
  }, [region]);

  const searchCountry = function () {};
  return (
    <div className="w-1440 ml-6 text-lg">
      <div>
        <form className="home--header">
          <input type="text" placeholder="Search for a country" />
        </form>
        <div>
          <Dropdown menu={{ items }}>
            <h4 className="flex gap-2 items-center">
              <span className="text-white"> Filter By Regions</span>{" "}
              <BsArrowDownShort size={"22px"} />
            </h4>
          </Dropdown>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-12">
        {countries.map((country) => (
          <Link to={`${country.name.official}`}>
            <Country country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const countryLoader = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  return res.json();
};
