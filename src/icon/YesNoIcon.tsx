import React from 'react';
import Icon from "./Icon";
import {YesNoIconProps} from "./types";

const YesNoIcon: React.FC<YesNoIconProps> = ({yes, yesIcon = 'check', noIcon = 'times', size, className = '', style = {}}) => {
  return yes ? <Icon icon={yesIcon} size={size} className={className} style={style}/> : <Icon icon={noIcon} size={size} className={className} style={style}/>
};


export default YesNoIcon;