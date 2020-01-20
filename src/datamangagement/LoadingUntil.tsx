import React from "react";
import {isNil} from 'ramda';
import {LoadingUntilProps} from "./types";
import Icon from "../icon/Icon";


const LoadingUntil: React.FC<LoadingUntilProps> =
  ({loading, hasData = false, alt, children, className = '', style = {}}) => {

    if (!loading && !isNil(loading)) {
      return <>{children || null}</>; // some weird typescript fuckup?
    }

    if (loading && hasData) {
      return <div className={'loading-overlay'}>
        <div className={className} style={style}>
          <Icon icon={'spinner'} className={'fa-spin fa-3x spinner'}/>
        </div>
        {children}
      </div>
    }

    return !isNil(alt) ?
      <>{alt}</>
      :
      <div className={className} style={style}>
        <Icon icon={'spinner'} className={'fa-spin fa-3x'}/>
      </div>
  };


export default LoadingUntil;
