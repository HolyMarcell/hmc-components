import React from 'react';
import {TitleProps} from "./types";


export const Title: React.FC<TitleProps> = ({children, size = 'nm', style = {}, className = ''}) => {


  return (
    <div className={`title title-${size} ${className}`} style={style}>
      {children}
    </div>
  )
};
