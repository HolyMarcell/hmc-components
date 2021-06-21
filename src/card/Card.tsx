import React from "react";
import {CardProps} from "./types";


export const Card: React.FC<CardProps> = ({children, className = '', style = {}}) => {


  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );

};


