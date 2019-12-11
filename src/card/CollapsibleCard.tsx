import React, {useState} from 'react'
import Card from "./Card";
import {CSSTransition} from "react-transition-group";
import CardTitle from "./CardTitle";
import {CollapsibleCardProps} from "./types";
import Icon from '../icon/Icon';


const CollapsibleCard: React.FC<CollapsibleCardProps> = ({children, title, topRight, collapsed = false, className = '', style = {}}) => {

  const [isCollapsed, setCollapsed] = useState(collapsed);


  return (
    <Card className={`collapsible ${className}`} style={style}>
      <div className={'title-bar'}>
        <CardTitle topRight={topRight}>

          {isCollapsed ?
            <Icon icon={'caret-down'} className={'mg-r-sm cursor-pointer'} tabIndex={1} onClick={() => setCollapsed(c => !c)}/> :
            <Icon icon={'caret-right'} className={'mg-r-sm cursor-pointer'} tabIndex={1} onClick={() => setCollapsed(c => !c)}/>}
          <span onClick={() => setCollapsed(c => !c)} className={'cursor-pointer'}>
            {title}
          </span>
        </CardTitle>
      </div>
      <CSSTransition in={!isCollapsed} timeout={110} classNames={'collapsible-card'}>
        <div className={'collapsible-animation-wrapper'}>
          {children}
        </div>
      </CSSTransition>

    </Card>
  );
};

export default CollapsibleCard;
