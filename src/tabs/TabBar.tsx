
import React from 'react';

interface TabBarTab {
  title: string;
  key: string;
}

const TabBar: React.FC<{ tabs: TabBarTab[]; onChange; active }> = ({ tabs, onChange, active }) => {

  return (
    <div className={'tabs'}>
      <ul className={'tabs-navigation'}>
        {tabs.map((item, i) => {
          const {key, title} = item;
          return (
            <li key={`${key},${i}`} className={`${key === active ? 'active' : ''}`}>
              <span onClick={() => onChange(key)}>
                {title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabBar;

