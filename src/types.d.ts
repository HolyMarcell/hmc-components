import React from "react";

export interface DummyProps {
  foo: string;
}

export interface ReactStyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface CardTitleProps extends ReactStyleProps {
  topRight?: React.ReactNode;
}

export interface CardActionsProps extends ReactStyleProps {
}

export interface CardProps extends ReactStyleProps {
}

export interface CardBodyProps extends ReactStyleProps {
}

export interface Tab {
  title: React.ReactNode;
  body?: React.ReactNode;
}

export interface TabbedCardProps extends ReactStyleProps {
  tabs: Tab[];
  topRight?: React.ReactNode;
}
