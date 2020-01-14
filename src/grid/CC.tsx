import React from 'react';
import {CCProps} from "./types";




const CC: React.FC<CCProps> = ({children, className = '', style = {}}) => {

  return (
    <div className={`d-f f-jc-c f-ai-c ${className}`} style={{height: '100%', ...style}}>
      {children}
    </div>
  )
};

export default CC;