import React, {useState} from 'react'
import {isNil, pathOr} from 'ramda';
import {is, isEmpty} from "../util/ram";
import {Card} from "./Card";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {TabbedCardProps} from "./types";


export const TabbedCard: React.FC<TabbedCardProps> = ({children, topRight, tabs, className = '', style = {}}) => {

  const [active, setActive] = useState(0);

  if (isEmpty(tabs) || !is(Array, tabs)) {
    return null;
  }

  return (
    <Card className={`tabbed ${className}`} style={style}>
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
      <TransitionGroup>
        <CSSTransition key={active} timeout={300} classNames={'tabbed-card'}>
          <div className={'tabbed-animation-wrapper'}>
            {pathOr(null, [active, 'body'], tabs)}
          </div>
        </CSSTransition>
      </TransitionGroup>
      {children}
    </Card>
  );
};

