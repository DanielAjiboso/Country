import { Link, useLoaderData } from "react-router-dom";
import Country from "../components/Country";

const Home = () => {
  const countryData = useLoaderData();
  console.log(countryData);
  return (
    <div>
      <div className="home--header">
        <input type="text" placeholder="Search for a country" />
      </div>
      <Country />
    </div>
  );
};

export default Home;

export const countryLoader = async () => {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  return res.json();
};
