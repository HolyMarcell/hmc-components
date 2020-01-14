import {ReactStyleProps} from "../commonTypes";

export interface ControlAreaProps extends ReactStyleProps {
  onClick: () => any;
  type?: 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | string;
}

