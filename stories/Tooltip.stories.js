import React, {useState} from 'react';
import {TabBar} from "../src";
import Tooltip from "../src/hover/Tooltip";

export default {
  title: 'Tooltip',
};




export const hovermode = () => {
  return (
    <div>
      <Tooltip content={'deine mudda'}>
        <div style={{border: '1px solid darkblue', padding: '10px', cursor: 'pointer'}}>Hoverme</div>
      </Tooltip>

      <Tooltip content={<div><ul><li>more</li><li>content</li><li>than</li><li>just text</li></ul></div>}>
        <div style={{border: '1px solid darkblue', padding: '10px', cursor: 'pointer'}}>Hoverme</div>
      </Tooltip>
    </div>
  )
};


export const activatedmode = () => {
  return (
    <div>
      <Tooltip content={'deine mudda'} mode={'activated'}>
        <div style={{border: '1px solid darkblue', padding: '10px', cursor: 'pointer'}}>Click me</div>
      </Tooltip>

      <Tooltip mode={'activated'} content={<div><ul><li>more</li><li>content</li><li>than</li><li>just text</li></ul></div>}>
        <div style={{border: '1px solid darkblue', padding: '10px', cursor: 'pointer'}}>Click me</div>
      </Tooltip>
    </div>
  )
};

export const positions = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '30px'}}>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'top'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>Top</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'left'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>left</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'bottom'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>bottom</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'right'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>right</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'top-left'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>Top-left</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'top-right'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>Top-right</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'bottom-left'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>bottom-left</div></Tooltip>
      <Tooltip content={'deine mudda'} mode={'activated'} show={true} position={'bottom-right'}><div style={{border: '1px solid darkblue', margin: '60px', padding: '10px', cursor: 'pointer', width: '50px'}}>bottom-right</div></Tooltip>

    </div>
  )
};





