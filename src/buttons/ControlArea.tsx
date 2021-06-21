import React from "react";
import {ControlAreaProps} from "./types";


export const ControlArea: React.FC<ControlAreaProps> = ({onClick, type = 'default', children, className = '', style = {}}) => {

  return (
    <div className={`control-area control-area--${type} ${className}`} style={style} onClick={onClick}>
      {children}
    </div>
  );

};

