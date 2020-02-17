import {ReactStyleProps} from "../commonTypes";
import React from "react";


export interface TabBarTab {
  title: string;
  id: string;
  options?: React.ReactNode;
}

export interface TabBarProps extends ReactStyleProps{
  tabs: TabBarTab[];
  onChange: (_: any) => any;
  active: string;
  align?: string;
}

export interface Tab extends TabBarTab{
  body: React.ReactNode;
}

export interface TabsProps extends ReactStyleProps {
  tabs: Tab[];
  active?: string;
  alignTabs: 'left' | 'right' | string;
}