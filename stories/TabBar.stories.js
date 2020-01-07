import React, {useState} from 'react';
import {TabBar} from "../src";

export default {
  title: 'TabBar',
};




export const plain = () => {
  const tabs = [
    {title: 'First tab', id: 'first'},
    {title: 'Second tab', id: '2'},
    {title: 'Third tab', id: '3'},
    {title: 'Last tab', id: 'last'},
  ];
  const [ac, setAc] = useState('first');

  return (
    <div>
      active: {ac} <br/>
      <TabBar tabs={tabs} active={ac} onChange={(id) => setAc(id)}/>

    </div>
  )
};

export const options = () => {
  const tabs = [
    {title: 'First tab', id: 'first', options: {label: 'An Option', onClick: () => alert('foo')}},
    {title: 'Second tab', id: '2'},
    {title: 'Third tab', id: '3'},
    {title: 'Last tab', id: 'last'},
  ];
  const [ac, setAc] = useState('first');

  return (
    <div>
      active: {ac} <br/>
      <TabBar tabs={tabs} active={ac} onChange={(id) => setAc(id)}/>

    </div>
  )
};

