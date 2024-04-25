import { Link, useLoaderData } from "react-router-dom";
import Country from "../components/Country";
import { CountryInfo } from "../CountryInfo";
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

  return (
    <div>
      <div className="home--header">
        <input type="text" placeholder="Search for a country" />
      </div>
      {displayCountries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
};

export default Home;

export const countryLoader = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  return res.json();
};
