import React, {useState} from 'react';
import {TabBar, Tabs} from "../src";

export default {
  title: 'Tabs',
};




export const tabarPlain = () => {
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

export const tabbarOptions = () => {
  const tabs = [
    {title: 'First tab', id: 'first', options: <div>Button</div>} ,
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



export const tabs = () => {
  const tabs = [
    {title: 'First tab', id: 'first', options: <div>Button</div>, body: <p>Hello world</p>} ,
    {title: 'Second tab', id: '2', body: <p>Hello second world</p>},
    {title: 'Third tab', id: '3', body: <p>Hello third world</p>},
    {title: 'Last tab', id: 'last', body: <h1>Hello WACKEN!!!!11</h1>},
  ];

  return (
    <div>
      <Tabs tabs={tabs}/>

    </div>
  )
};

