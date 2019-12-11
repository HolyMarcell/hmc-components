import React from 'react';
import {Icon} from "../src";

export default {
  title: 'Icon',
};



export const icon = () => (
  <p>
    Regular and solid FontAwesome icons:  <br/>

    <Icon icon={'edit'} /> <br/>
    <Icon icon={'edit'} className={'fa-2x'} />  <br/>
    <Icon icon={'edit'} className={'fa-3x'} tabIndex={1} />  <br/>
  </p>);
