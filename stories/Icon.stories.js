import React from 'react';
import {Icon} from "../src";
import {YesNoIcon} from "../src";

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


export const yesnoicon = () => (
  <p>
    Regular and solid FontAwesome icons:  <br/>

    Yes: <YesNoIcon yes={true} /> <br/>
    No (2x): <YesNoIcon yes={false} className={'fa-2x'} />  <br/>
  </p>);


export const yesnocustomIcons = () => (
  <p>
    Regular and solid FontAwesome icons:  <br/>

    Yes: <YesNoIcon yes={true} yesIcon={'eye'} /> <br/>
    No (2x): <YesNoIcon yes={false} noIcon={'eye-slash'} />  <br/>
  </p>);
