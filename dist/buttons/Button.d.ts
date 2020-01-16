import { ButtonType } from "./types";
import React from "react";
import { ReactClickable, ReactStyleProps, Sizes } from "../commonTypes";
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
export declare const Button: React.FC<ButtonProps>;
export default Button;
