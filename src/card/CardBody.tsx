import React from "react";
import {CardBodyProps} from "../types";


const CardBody: React.FC<CardBodyProps> = ({children, className = '', style = {}}) => {


  return (
    <div className={`body ${className}`} style={style}>
      {children}
    </div>
  );

};


export default CardBody;
