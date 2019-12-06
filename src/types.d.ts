import React from "react";

export interface DummyProps {
  foo: string;
}

export interface ReactStyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface CardProps extends ReactStyleProps {
  title?: string;
  topRight?: React.ReactNode;
  actions?: React.ReactNode[];

}
