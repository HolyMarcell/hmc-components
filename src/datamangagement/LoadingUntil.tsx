import React from "react";
import {LoadingUntilProps} from "./types";
import {Icon} from "../icon/Icon";


export const LoadingUntil: React.FC<LoadingUntilProps> =
  ({loading = false, hasData = false,  children, className = '', style = {}}) => {


    const showChildren = loading ? hasData : true;

    return (
      <div className={`${loading && hasData ? 'loading-overlay' : ''}`}>
        {loading &&
        <div className={className} style={style}>
          <Icon icon={'spinner'} className={'fa-spin fa-3x spinner'}/>
        </div>
        }
        {showChildren && children}
      </div>
    );
  };

