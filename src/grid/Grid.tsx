import React from 'react';
import {GridProps} from "./types";




const Grid: React.FC<GridProps> = ({children, cols = '1fr 1fr 1fr',  rows = 1, rowGap = '1rem', colGap = '1rem', className = '', style = {}}) => {

  const grid = {
    ...style,
    display: 'grid',
    gridTemplateColumns: cols,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridColumnGap: colGap,
    gridRowGap: rowGap,
  };


  return (
    <div style={grid} className={className}>
      {children}
    </div>
  );
};


export default Grid;
