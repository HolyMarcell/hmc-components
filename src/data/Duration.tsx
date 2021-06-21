import moment from 'moment';
import {DurationProps} from "./types";
import React from "react";
import {isNil} from "../util/ram";


export const Duration: React.FC<DurationProps> = ({length, locale}) => {

  const loc = isNil(locale) ? window.navigator.language : locale;
  return <>{moment.duration(length).locale(loc).humanize()}</>
};
