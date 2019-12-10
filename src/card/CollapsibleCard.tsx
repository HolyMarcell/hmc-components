import React, {useState} from 'react'
import {CollapsibleCardProps} from "../types";
import Card from "./Card";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CardTitle from "./CardTitle";


const CollapsibleCard: React.FC<CollapsibleCardProps> = ({children, title, topRight, collapsed = false, className = '', style = {}}) => {

  const [isCollapsed, setCollapsed] = useState(collapsed);


  return (
    <Card className={`collapsible ${className}`} style={style}>
      <div className={'title-bar'}>
        <CardTitle topRight={topRight}>
          <span onClick={() => setCollapsed(c => !c)}>{isCollapsed ? 'v' : '>'}</span>
          {title}
        </CardTitle>
      </div>
      <TransitionGroup>
        <CSSTransition in={!isCollapsed} timeout={300} classNames={'collapsible-card'}>
          <div className={'collapsible-animation-wrapper'}>
            {children}
          </div>
        </CSSTransition>
      </TransitionGroup>

    </Card>
  );
};

export default CollapsibleCard;
