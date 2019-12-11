import {IconProp, library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProps} from "./types";

library.add(far, fas);



const Icon: React.FC<IconProps> = ({icon, style = {}, className = '', tabIndex, onClick}) => {
  return (
    <FontAwesomeIcon icon={icon as IconProp} style={style} className={`icon ${className}`} tabIndex={tabIndex} onClick={onClick}/>
  )
};

export default Icon;