import React from "react";
import {isNil} from "../util/ram";
import {CardTitleProps} from "./types";


export const CardTitle: React.FC<CardTitleProps> = ({topRight, children, className = '', style = {}}) => {
  return (
    <div className={`title-bar ${className}`} style={style}>
      {!isNil(children) &&
      <div className={'title'}>{children}</div>
      }

      {isNil(children) && <span></span>}

      {!isNil(topRight) &&
      <div className={'top-right'}>{topRight}</div>
      }
    </div>);

};
