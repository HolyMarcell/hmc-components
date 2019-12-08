import {CardProps} from "../types";
import React from "react";
import {isEmpty, isNil} from "../util/ram";


const Card: React.FC<CardProps> = ({title, topRight, actions, children, className, style}) => {

  const showTitle = !isNil(title) || !isNil(topRight);
  const showActions = !isNil(actions) && !isEmpty(actions);

  return (
    <div className={`card ${className}`} style={style}>
      {showTitle &&
      <div className={'title-bar'}>
        {!isNil(title) &&
        <div className={'title'}>{title}</div>
        }

        {!isNil(topRight) &&
        <div className={'top-right'}>{topRight}</div>
        }
      </div>
      }
      <div className={'body'}>
        {children}
      </div>
      {showActions &&
      <div className={'actions'}>
        {actions.map((action, i) => {
          return (
            <React.Fragment key={i}>
              {action}
            </React.Fragment>
          )
        })}
      </div>
      }
    </div>
  );

}


export default Card;
