import React from 'react';
import {CHProps} from "./types";




const CH: React.FC<CHProps> = ({children, className = '', style = {}}) => {

  return (
    <div className={`d-f f-jc-c ${className}`} style={{height: '100%', ...style}}>
      {children}
    </div>
  )
};

export default CH;
