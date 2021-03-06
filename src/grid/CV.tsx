import React from 'react';
import {CVProps} from "./types";


export const CV: React.FC<CVProps> = ({children, className = '', style = {}}) => {

  return (
    <div className={`d-f f-ai-c ${className}`} style={{height: '100%', ...style}}>
      {children}
    </div>
  )
};

