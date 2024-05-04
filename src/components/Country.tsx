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
      className={`w-350  flex flex-col ${
        darkMode ? "bg-sky-950" : "bg-gray-100"
      } `}
    >
      <img src={country.flags.png} alt={country.altSpellings[0]} />

      <div className="text-3xl font-bold">{country.name.common}</div>
      <div className="flex flex-col mt-6">
        <div>Population: {country.population}</div>
        <div>Region: {country.region}</div>
        <div>Capital: {country.capital}</div>
      </div>
    </div>
  );
};

export default Country;
