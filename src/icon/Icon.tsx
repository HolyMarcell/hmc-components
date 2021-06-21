import {IconProp, library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProps} from "./types";
import {prop} from "../util/ram";

library.add(far, fas);

const iconSizes = {
  xs: 'fa-xs',
  sm: 'fa-sm',
  nm: 'fa-lg',
  md: 'fa-2x',
  lg: 'fa-3x',
  xl: 'fa-5x',
  xxl: 'fa-7x',
};


export const Icon: React.FC<IconProps> = ({icon, size = 'nm', style = {}, className = '', tabIndex, onClick}) => {
  const s = prop(size, iconSizes);
  return (
    <FontAwesomeIcon icon={icon as IconProp} style={style} className={`icon ${className} ${s}`} tabIndex={tabIndex} onClick={onClick}/>
  )
};
