import React from 'react';
import {EProps} from "./types";


const E: React.FC<EProps> = ({children = null, className = '', style = {}}) => {
  const pos = {
    ...style,
    gridColumn: '0 / 1',
    gridRow: '0 / 1',
  };

  return (
    <div style={pos} className={className}>
      {children}
    </div>
  )
};

export default E;
