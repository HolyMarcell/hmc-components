import {CardProps} from "../types";
import React from "react";


const Card: React.FC<CardProps> = ({children, className = '', style = {}}) => {


  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );

};


export default Card;
