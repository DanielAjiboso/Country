import React from "react";
import { CountryInfo } from "../CountryInfo";

interface Props {
  country: CountryInfo;
}

const Country: React.FC<Props> = function ({ country }: Props) {
  return <div>{country.name.common}</div>;
};

export default Country;
