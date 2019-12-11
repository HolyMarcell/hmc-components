import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface DummyProps {
  foo: string;
}

interface ReactStyleProps {
  className?: string;
  style?: React.CSSProperties;
}

interface AllyProps extends AriaAriaAttributes {
  tabIndex?: number;
}

interface ReactClickable {
  onClick?: () => void;
}

interface CardTitleProps extends ReactStyleProps {
  topRight?: React.ReactNode;
}

interface CardActionsProps extends ReactStyleProps {
}

interface CardProps extends ReactStyleProps {
}

interface CardBodyProps extends ReactStyleProps {
}

interface Tab {
  title: React.ReactNode;
  body?: React.ReactNode;
}

interface TabbedCardProps extends ReactStyleProps {
  tabs: Tab[];
  topRight?: React.ReactNode;
}

interface CollapsibleCardProps extends ReactStyleProps {
  title: React.ReactNode;
  topRight?: React.ReactNode;
  collapsed?: boolean;
}

interface IconProps extends ReactStyleProps, AllyProps, ReactClickable {
  icon: IconProp | string;
}

export { AllyProps, CardActionsProps, CardBodyProps, CardProps, CardTitleProps, CollapsibleCardProps, DummyProps, IconProps, ReactClickable, ReactStyleProps, Tab, TabbedCardProps };
