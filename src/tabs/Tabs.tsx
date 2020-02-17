import React, {useState} from 'react';
import {path} from 'ramda';
import {TabsProps} from "./types";
import TabBar from './TabBar';
import {find, isNil, propEq, prop} from "../util/ram";




const Tabs: React.FC<TabsProps> = ({tabs, active, alignTabs = 'left', className = '', style = {}}) => {


  const initialActive = isNil(active) ? prop(0, tabs) : find(propEq('id', active))(tabs);

  const [current, setCurrent] = useState(prop('id', initialActive));

  return (
    <div className={`tabs-wrapper ${className}`} style={style}>
      <TabBar
        active={current}
        tabs={tabs}
        onChange={setCurrent}
        align={alignTabs} />
      <div className={'tabs-body'}>
        {prop('body', find(propEq('id', current))(tabs))}
      </div>
    </div>
  );
};

export default Tabs;
