import React from "react";
import { CountryInfo } from "../CountryInfo";
// import { typeDark } from "../Layout/RootLayout";
interface Props {
  country: CountryInfo;
  darkMode: boolean;
}

const Country: React.FC<Props> = function ({ country, darkMode }: Props) {
  return (
    <div
      className={` w-96  flex flex-col rounded-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      } `}
    >
      <img
        className={`rounded-lg w-full h-80`}
        src={country.flags.png}
        alt={country.altSpellings[0]}
      />
      <div className="ml-5">
        <div className="text-3xl font-bold">{country.name.common}</div>
        <div className="flex flex-col mt-6">
          <div>Population: {country.population.toLocaleString()}</div>
          <div>Region: {country.region}</div>
          <div className="mb-20">Capital: {country.capital}</div>
        </div>
      </div>
    </div>
  );
};

export default Country;
