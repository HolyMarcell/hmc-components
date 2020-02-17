import React from "react";
import {TooltipProps} from "./types";
import Tippy from "@tippy.js/react";
import {placementMapper} from "./util";

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {content, show, mode = 'hover', caret = true, position = 'top', children} = props;


  const triggerMapper = (mode) => {
    switch(mode) {
      case 'hover':
        return 'mouseenter focus';
      case 'activated':
        return 'click';
      default:
        return 'mouseenter focus';
    }
  };

  const hideMapper = (mode) => {
    switch(mode) {
      case 'hover':
        return false;
      case 'activated':
        return true;
      default:
        return false;
    }
  };

  return (
    <Tippy
      visible={show}
      placement={placementMapper(position) as any}
      arrow={caret}
      animation={'fade'}
      hideOnClick={hideMapper(mode)}
      trigger={triggerMapper(mode)}
      content={content as any}>
      {children as any}
    </Tippy>
  )
};


export default Tooltip;
