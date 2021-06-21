import React from "react";
import {CardBodyProps} from "./types";


export const CardBody: React.FC<CardBodyProps> = ({children, className = '', style = {}}) => {


  return (
    <div className={`body ${className}`} style={style}>
      {children}
    </div>
  );

};


