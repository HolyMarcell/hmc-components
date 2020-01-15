import React from 'react';
import {Icon, Spinner} from "../src";
import {YesNoIcon} from "../src";

export default {
  title: 'Icon',
};


export const icon = () => (
  <p>
    Regular and solid FontAwesome icons: <br/>

    <Icon icon={'edit'}/> <br/>
    <Icon icon={'edit'} size={'md'}/> <br/>
    <Icon icon={'edit'} size={'lg'} tabIndex={1}/> <br/>
  </p>);


export const yesnoicon = () => (
  <p>

    Yes: <YesNoIcon yes={true}/> <br/>
    No (2x): <YesNoIcon yes={false} size={'md'}/> <br/>
  </p>);


export const yesnocustomIcons = () => (
  <p>

    Yes: <YesNoIcon yes={true} yesIcon={'eye'}/> <br/>
    No: <YesNoIcon yes={false} noIcon={'eye-slash'}/> <br/>
  </p>);


export const spinnerIcon = () => (
  <p>
    <Spinner/> <br/>
    <Spinner size={'md'}/> <br/>
    <Spinner size={'lg'}/> <br/>
    <br/>
    <Spinner icon={'bus'} size={'xl'}/> <br/>

  </p>);
