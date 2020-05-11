import moment from 'moment';
import React from 'react';
import {isNil} from 'ramda';
import {DatePrettyProps} from "./types";


const DatePretty: React.FC<DatePrettyProps> = ({date, format = 'lll', locale}) => {
  const loc = isNil(locale) ? window.navigator.language : locale;

  if(isNil(date)) {
    return <>-</>
  }
  moment.locale(loc);
  const l = moment(date);
  return <>
    {l.format(format)}
  </>

};

export default DatePretty;
