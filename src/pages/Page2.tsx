import { Link, useLoaderData, useParams } from "react-router-dom";
import { CountryInfo } from "../CountryInfo";
import { useEffect, useState } from "react";
import axios from "axios";

const Page2 = function () {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState<CountryInfo>();
  // https://restcountries.com/v3.1/name/{name}
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => setCountryDetails(res.data[0]));
  }, []);
  console.log(countryDetails);

  return (
    <div>
      <div>
        <img src={countryDetails?.flags.png} alt={"country flag"} />
      </div>
      <div>
        <h1>{countryDetails?.name.common}</h1>
        <h3>Official Name: {countryDetails?.name.official}</h3>
        <h3>Region: {countryDetails?.region}</h3>
        <h3>Sub Region: {countryDetails?.subregion}</h3>
        <h3>Capital: {countryDetails?.capital}</h3>
        <h3>Top Level Domain: {countryDetails?.tld}</h3>
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
