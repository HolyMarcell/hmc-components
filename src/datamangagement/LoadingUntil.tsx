import React from "react";
import {isNil} from 'ramda';
import {LoadingUntilProps} from "./types";
import Icon from "../icon/Icon";


const LoadingUntil: React.FC<LoadingUntilProps> = ({loading, alt, children, className = '', style = {}}) => {

  if (!loading && !isNil(loading)) {
    return <>{children || null}</>; // some weird typescript fuckup?
  }

  return !isNil(alt) ?
    <>{alt}</>
    :
    <div className={className} style={style}>
      <Icon icon={'spinner'} className={'fa-spin fa-3x'}/>
    </div>
};


export default LoadingUntil;
