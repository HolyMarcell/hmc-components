import React from "react";
import {LinkAlikeProps} from "./types";


const LinkAlike: React.FC<LinkAlikeProps> = ({children, onClick, className = '', style = {}}) => {

  return (
    <span className={`link-alike ${className}`} onClick={onClick} style={style}>{children}</span>
  );
};


export default LinkAlike;
