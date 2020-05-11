import {ReactClickable, ReactStyleProps, Sizes} from "../commonTypes";

export type ButtonType = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | string;

export interface ControlAreaProps extends ReactStyleProps, ReactClickable {
  type?: ButtonType;
}


export interface ButtonProps extends ReactStyleProps, ReactClickable {
  type?: ButtonType;
  disabled?: boolean;
  active?: boolean;
  promise?: boolean;
  loading?: boolean;
  appearance?: 'default' | 'subtle' | 'outlined' | 'text' | string;
  groupPos?: 'left' | 'middle' | 'right' | string;
  size?: Sizes;
}
