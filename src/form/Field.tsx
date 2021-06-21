import React from "react";
import {FieldProps} from "./types";
import {isNil} from "../util/ram";


export const Field: React.FC<FieldProps> = ({valid, dirty, touched, children, style, className}) => {
  const v = isNil(valid) ? true : valid;

  const c = `field ${v ? 'field--valid' : 'field--invalid'} `;

  return  (
    <div className={`${c} ${className}`} style={style}>
      {children}
    </div>
  )
};

