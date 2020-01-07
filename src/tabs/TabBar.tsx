import React, {useState} from 'react';
import {TabBarProps} from "./types";
import {isNil} from "../util/ram";
import Icon from '../icon/Icon';

const TabBar: React.FC<TabBarProps> = ({tabs, onChange, active, style = {}, className = ''}) => {

  const [visibleOptions, setVisibleOptions] = useState(null);

  const changeTab = (id) => {
    setVisibleOptions(null);
    onChange(id);
  };

  return (
    <div className={`tabs ${className}`} style={style}>
      <ul className={'tabs-navigation'}>
        {tabs.map((item, i) => {
          const {id, title, options} = item;
          return (
            <li key={`${id},${i}`} className={`${id === active ? 'active' : ''}`}>
              <span onClick={() => changeTab(id)}>
                {title}
              </span>
              {!isNil(options) &&
              <>
                <span className={'options'} onClick={() => setVisibleOptions((v) => isNil(v) ? id : null)}>
                  <Icon icon={'ellipsis-v'} className={'optselect'}/>
                </span>
                {visibleOptions === id &&
                  <ul>
                    <li>foo</li>
                  </ul>
                }
              </>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabBar;

