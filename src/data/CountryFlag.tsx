import ReactCountryFlag from "react-country-flag"
import React from "react";
import {CountryFlagProps} from "./types";


const CountryFlag: React.FC<CountryFlagProps> =
  ({countryCode, title, svg = true, className = '', style = {}}) => {


    return (
      <ReactCountryFlag
        className={className}
        countryCode={countryCode}
        style={style}
        svg={svg}
        title={title}
      />
    )

  }

export default CountryFlag;
