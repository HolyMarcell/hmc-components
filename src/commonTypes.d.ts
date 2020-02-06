import React from "react";


export interface ReactStyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface AllyProps extends AriaAriaAttributes {
  tabIndex?: number;
}

export interface ReactClickable {
  onClick?: () => any;
}

export type Sizes = 'xs' | 'sm' | 'nm' | 'md' | 'lg' | 'xl' | string;


export type BoxPlacement =
  'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'
  | string;

export interface DataItem {
  value: any;
  label: string;
}
