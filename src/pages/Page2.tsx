import { Link, useLoaderData, useParams } from "react-router-dom";
import { CountryInfo } from "../CountryInfo";

const Page2 = function () {
  // const { name } = useParams();
  const detailsData: string[] = useLoaderData() as string[];

  return <div>{detailsData}</div>;
};

export default Page2;

export const detailsLoader = async function () {
  const { name } = useParams();

  const res = await fetch(`https://restcountries.com/v3.1/${name}`);
  return res.json();
};
