import {CurrencyProps} from "./types";
import React from "react";
import {isNil} from 'ramda';


const Currency: React.FC<CurrencyProps> = ({amount, currency, locale}) => {

  const loc = isNil(locale) ? window.navigator.language : locale;

  return <>{new Intl.NumberFormat(loc, {style: 'currency', currency: currency}).format(amount)}</>
};

export default Currency;
