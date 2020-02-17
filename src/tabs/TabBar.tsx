import React from 'react';
import {TabBarProps} from "./types";
import {isNil} from "../util/ram";
import Icon from '../icon/Icon';
import Dropdown from '../popover/Dropdown';

const TabBar: React.FC<TabBarProps> = ({tabs, align = 'left', onChange, active, style = {}, className = ''}) => {


  const changeTab = (id) => {
    onChange(id);
  };

  return (
    <div className={`tabs ${className}`} style={style}>
      <ul className={`tabs-navigation ${align === 'left' ? 'f-jc-s' : 'f-jc-e'}`}>
        {tabs.map((item, i) => {
          const {id, title, options} = item;
          const ac = id === active;
          return (
            <li key={`${id},${i}`} className={`${ac ? 'active' : ''}`}>
              <span onClick={() => changeTab(id)}>
                {title}
              </span>
              {!isNil(options) &&
              <Dropdown content={options}>
                <span className={`options options--${ac ?`'active` : 'inactive'}`}>
                  <Icon icon={'check-square'} className={'optselect'}/>
                </span>
              </Dropdown>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabBar;

