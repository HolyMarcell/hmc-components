import React from "react";

export interface DummyProps {
  foo: string;
}

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
