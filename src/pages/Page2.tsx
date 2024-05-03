import { Link, useLoaderData, useParams } from "react-router-dom";
import { CountryInfo } from "../CountryInfo";
import { useEffect, useState } from "react";
import axios from "axios";

const Page2 = function () {
  // const
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState<CountryInfo>();
  // https://restcountries.com/v3.1/name/{name}
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => setCountryDetails(res.data[0]));
  }, []);

  // const obj =
  //   countryDetails?.languages && Object.values(countryDetails.languages);

  // console.log(obj?.join(","));
  // console.log(countryDetails?.borders);

  return (
    <div>
      <Link to={"/"} >
        <button className="">Back</button>
      </Link>
      <div className="">
        <div>
          <img src={countryDetails?.flags.png} alt={"country flag"} />
        </div>
        <div>
          <div>
            <h1>{countryDetails?.name.common}</h1>
            <h3>Official Name: {countryDetails?.name.official}</h3>
            <h3>Region: {countryDetails?.region}</h3>
            <h3>Sub Region: {countryDetails?.subregion}</h3>
            <h3>Capital: {countryDetails?.capital}</h3>
            <h3>Top Level Domain: {countryDetails?.tld}</h3>
            <h3>
              Currency:{" "}
              {countryDetails?.currencies &&
                Object.values(countryDetails?.currencies)[0].name}{" "}
              (
              {countryDetails?.currencies &&
                Object.values(countryDetails?.currencies)[0].symbol}
              )
            </h3>
            <h3>
              Languages:{" "}
              {countryDetails?.languages &&
                Object.values(countryDetails.languages).join(", ")}
            </h3>
          </div>
          <div>
            {countryDetails?.borders.map((con) => (
              <h3>{con}</h3>
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
