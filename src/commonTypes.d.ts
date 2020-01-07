import React from "react";


export interface ReactStyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface AllyProps extends AriaAriaAttributes {
  tabIndex?: number;
}

export interface ReactClickable {
  onClick?: () => void;
}

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