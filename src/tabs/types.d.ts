import {ReactStyleProps} from "../commonTypes";

export interface TabOption {
  label: string;
  onClick: Function;
}


export interface TabBarTab {
  title: string;
  id: string;
  options?: TabOption[];
}

export interface TabBarProps extends ReactStyleProps{
  tabs: TabBarTab[];
  onChange: Function;
  active: string;
}