import {ReactStyleProps} from "../commonTypes";


export interface EProps extends ReactStyleProps {

}

export interface GridProps extends ReactStyleProps {
  cols: string;
  rows?: number;
  rowGap?: string;
  colGap?: string;
}