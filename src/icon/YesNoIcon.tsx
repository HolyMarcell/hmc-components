import React from 'react';
import Icon from "./Icon";
import {YesNoIconProps} from "./types";

const YesNoIcon: React.FC<YesNoIconProps> = ({yes, yesIcon = 'check', noIcon = 'times', className = '', style = {}}) => {
  return yes ? <Icon icon={yesIcon} className={className} style={style}/> : <Icon icon={noIcon} className={className} style={style}/>
};


export default YesNoIcon;