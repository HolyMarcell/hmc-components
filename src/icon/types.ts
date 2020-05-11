import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {AllyProps, ReactClickable, ReactStyleProps, Sizes} from "../commonTypes";


export interface IconProps extends ReactStyleProps, AllyProps, ReactClickable {
  icon: IconProp | string;
  size?: Sizes;
}

export interface YesNoIconProps extends ReactStyleProps {
  yes: boolean;
  yesIcon?: string;
  noIcon?: string;
  size?: Sizes;
}

export interface SpinnerProps extends ReactStyleProps {
  icon?: IconProp | string;
  size?: Sizes;
}
