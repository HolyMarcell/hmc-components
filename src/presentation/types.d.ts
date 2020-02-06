import {ReactStyleProps, Sizes} from "../commonTypes";


export interface TitleProps extends ReactStyleProps {
  size?: Sizes;
}



export interface LinkAlikeProps extends ReactStyleProps {
  onClick: () => any;
}
