import {Icon} from "./Icon";
import React from "react";
import {SpinnerProps} from "./types";


export const Spinner: React.FC<SpinnerProps> = ({icon = 'spinner', size, className = '', style = {}}) => {

  return <Icon icon={icon} size={size} className={`fa-spin ${className}`} style={style}/>
};

