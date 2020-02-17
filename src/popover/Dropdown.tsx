import React from "react";
import {DropdownProps} from "./types";
import Tippy from "@tippy.js/react";
import {placementMapper} from "./util";

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {content, show, caret = true, position = 'top', children} = props;





  return (
    <Tippy
      placement={placementMapper(position) as any}
      visible={show}
      arrow={caret}
      theme={'light-border'}
      animation={'fade'}
      interactive={true}
      hideOnClick={true}
      trigger={'click'}
      content={content as any}>
      {children as any}
    </Tippy>
  )
};


export default Dropdown;
