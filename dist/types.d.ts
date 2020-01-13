import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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

type BoxPlacement =
  'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-right'
  | 'top-left'
  | 'bottom-left'
  | 'bottom-right'
  | string;

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

interface YesNoIconProps extends ReactStyleProps{
  yes: boolean;
  yesIcon?: string;
  noIcon?: string;
}

interface CurrencyProps {
  amount: number;
  currency: string;
  locale?: string;
}

interface RelativeTimeProps {
  date: string;
  locale?: string;
}

interface TabOption {
  label: string;
  onClick: Function;
}


interface TabBarTab {
  title: string;
  id: string;
  options?: TabOption[];
}

interface TabBarProps extends ReactStyleProps{
  tabs: TabBarTab[];
  onChange: Function;
  active: string;
}

type TooltipMode = 'hover' | 'activated' | string;

interface TooltipProps extends ReactStyleProps {
  mode?: TooltipMode;
  content: React.ReactNode;
  position?: BoxPlacement;
  show?: boolean;
  caret?: boolean;
}

interface LoadingUntilProps extends ReactStyleProps{
  loading: boolean;
  alt?: React.ReactNode;
}

export { AllyProps, BoxPlacement, CardActionsProps, CardBodyProps, CardProps, CardTitleProps, CollapsibleCardProps, CurrencyProps, IconProps, LoadingUntilProps, ReactClickable, ReactStyleProps, RelativeTimeProps, Tab, TabBarProps, TabBarTab, TabOption, TabbedCardProps, TooltipMode, TooltipProps, YesNoIconProps };
