import React from "react";
import {FieldProps} from "./types";




const Field: React.FC<FieldProps> = ({children, style, className}) => {


  return  (
    <div className={`field ${className}`} style={style}>
      {children}
    </div>
  )
};

export default Field;