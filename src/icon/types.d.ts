import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {AllyProps, ReactClickable, ReactStyleProps} from "../commonTypes";


export interface IconProps extends ReactStyleProps, AllyProps, ReactClickable {
  icon: IconProp | string;
}
