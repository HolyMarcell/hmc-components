import React from "react";
import {CardActionsProps} from "../types";


const CardActions: React.FC<CardActionsProps> = ({children, className = '', style = {}}) => {


  return (
    <div className={`actions ${className}`} style={style}>
      {children}
    </div>
  );

};


export default CardActions;
