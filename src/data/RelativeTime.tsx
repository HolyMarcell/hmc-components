import moment from 'moment';
import {RelativeTimeProps} from "./types";
import React from "react";
import {isNil} from 'ramda';


const RelativeTime: React.FC<RelativeTimeProps> = ({date, locale}) => {
  // @TODO: Add tooltip with real time

  const loc = isNil(locale) ? window.navigator.language : locale;
  return <>{moment(date).locale(loc).fromNow()}</>
};

export default RelativeTime;
