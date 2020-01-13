import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {AllyProps, ReactClickable, ReactStyleProps} from "../commonTypes";


export interface IconProps extends ReactStyleProps, AllyProps, ReactClickable {
  icon: IconProp | string;
}

export interface YesNoIconProps extends ReactStyleProps{
  yes: boolean;
  yesIcon?: string;
  noIcon?: string;
}
