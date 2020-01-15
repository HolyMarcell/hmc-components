import {ReactClickable, ReactStyleProps} from "../commonTypes";

export interface TabOption extends ReactClickable {
  label: string;
}


export interface TabBarTab {
  title: string;
  id: string;
  options?: TabOption[];
}

export interface TabBarProps extends ReactStyleProps{
  tabs: TabBarTab[];
  onChange: (_: any) => any;
  active: string;
}