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
  onClick?: () => any;
}

type Sizes = 'xs' | 'sm' | 'nm' | 'md' | 'lg' | 'xl' | 'xxl' | string;


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

interface DataItem {
  value: any;
  label: string;
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
  size?: Sizes;
}

interface YesNoIconProps extends ReactStyleProps {
  yes: boolean;
  yesIcon?: string;
  noIcon?: string;
  size?: Sizes;
}

interface SpinnerProps extends ReactStyleProps {
  icon?: IconProp | string;
  size?: Sizes;
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


interface DatePrettyProps {
  date?: string;
  format?: 'l' | 'll' | 'lll' | string;
  locale?: string;
}

interface TabOption extends ReactClickable {
  label: string;
}


interface TabBarTab {
  title: string;
  id: string;
  options?: TabOption[];
}

interface TabBarProps extends ReactStyleProps{
  tabs: TabBarTab[];
  onChange: (_: any) => any;
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
  hasData?: boolean;
  alt?: React.ReactNode;
}

interface Pagination {
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  page: number;
  onNext: () => { go: () => Promise<any> };
  onPrev: () => { go: () => Promise<any> };
  onPageSelect: (page: number) => { go: () => Promise<any> };
}

interface PaginationFooterProps extends ReactStyleProps {
  pagination: Pagination;
  showTotal?: boolean;
  prevNextBtns?: boolean;
  totalLabel?: string;
}

export { AllyProps, BoxPlacement, CardActionsProps, CardBodyProps, CardProps, CardTitleProps, CollapsibleCardProps, CurrencyProps, DataItem, DatePrettyProps, IconProps, LoadingUntilProps, Pagination, PaginationFooterProps, ReactClickable, ReactStyleProps, RelativeTimeProps, Sizes, SpinnerProps, Tab, TabBarProps, TabBarTab, TabOption, TabbedCardProps, TooltipMode, TooltipProps, YesNoIconProps };
