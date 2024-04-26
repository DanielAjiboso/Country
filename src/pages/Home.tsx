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
    <div className="w-1440 ml-6 text-lg">
      <form className="home--header">
        <input type="text" placeholder="Search for a country" />
      </form>
      <div className="flex flex-wrap  justify-center items-center gap-12">
        {displayCountries.map((country) => (
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
