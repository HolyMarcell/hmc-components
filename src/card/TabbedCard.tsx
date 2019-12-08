import React, {useState} from 'react'
import {has, isNil, pathOr} from 'ramda';
import {TabbedCardProps} from "../types";
import {is, isEmpty} from "../util/ram";
import Card from "./Card";


const TabbedCard: React.FC<TabbedCardProps> = ({topRight, actions, tabs, className, style}) => {

  const [active, setActive] = useState(0);

  if(isEmpty(tabs) || !is(Array, tabs)) {
    return null;
  }

  return (
    <Card className={`tabbed ${className}`} style={style} actions={actions}>
      <div className={'title-bar'}>
        <ul className={'tabs'}>
          {tabs.map((item, index) => {
            return (
              <li key={`${item.title}${index}`} className={`${index === active ? 'active' : ''}`}>
                <span onClick={() => setActive(index)}>
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>

        {!isNil(topRight) &&
        <div className={'top-right'}>{topRight}</div>
        }
      </div>

      {pathOr(null, [active, 'body'], tabs)}
    </Card>
  );
};

export default TabbedCard;
