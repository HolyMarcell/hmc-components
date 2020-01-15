import {ReactClickable, ReactStyleProps} from "../commonTypes";

export type ButtonType = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | string;

export interface ControlAreaProps extends ReactStyleProps, ReactClickable {
  type?: ButtonType;
}

