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

type Sizes = 'xs' | 'sm' | 'nm' | 'md' | 'lg' | 'xl' | string;


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

type ButtonType = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'danger' | string;

interface ControlAreaProps extends ReactStyleProps, ReactClickable {
  type?: ButtonType;
}


interface ButtonProps extends ReactStyleProps, ReactClickable {
  type?: ButtonType;
  disabled?: boolean;
  active?: boolean;
  promise?: boolean;
  loading?: boolean;
  appearance?: 'default' | 'subtle' | 'outlined' | 'text' | string;
  groupPos?: 'left' | 'middle' | 'right' | string;
  size?: Sizes;
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

interface CurrencyProps {
  amount: number;
  currency: string;
  locale?: string;
}

interface RelativeTimeProps {
  date: string;
  locale?: string;
}

interface DurationProps {
  length: number;
  locale?: string;
}


interface DatePrettyProps {
  date?: string;
  format?: 'l' | 'll' | 'lll' | string;
  locale?: string;
}


interface CountryFlagProps extends ReactStyleProps {
  countryCode: string;
  svg?: boolean;
  title?: string;
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

type OnChangeFunc = (value: any) => any;


type FormTypes = 'string' | 'number' | 'select' | string;

interface FieldMetaStateProps {
  dirty: boolean;
  valid: boolean;
  touched?: boolean;
  required?: boolean;
}

interface FieldControlProps {
  value: any;
  onChange: OnChangeFunc;
}

interface FieldProps extends ReactStyleProps, FieldMetaStateProps {
  type: FormTypes;
}


interface SelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

interface CreatableSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

interface CreatableMultiSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

interface MultiSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}


interface AsyncSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  asyncOptions: (search) => Promise<DataItem[]>;
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
}
interface AsyncMultiSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  asyncOptions: (search) => Promise<DataItem[]>;
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
}



interface InputProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
  htmlType?: 'text' | 'number' | 'password' | string;
}

interface CheckboxProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
}


interface TextareaProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
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

interface EProps extends ReactStyleProps {

}

interface GridProps extends ReactStyleProps {
  cols: string;
  rows?: number;
  rowGap?: string;
  colGap?: string;
}

interface CCProps extends ReactStyleProps {

}

interface CHProps extends ReactStyleProps {

}

interface CVProps extends ReactStyleProps {

}

type TooltipMode = 'hover' | 'activated' | string;

interface TooltipProps {
  mode?: TooltipMode;
  content: React.ReactNode;
  position?: BoxPlacement;
  caret?: boolean;
  show?: boolean;
}


interface DropdownProps {
  content: React.ReactNode;
  position?: BoxPlacement;
  caret?: boolean;
  show?: boolean;
}

interface TitleProps extends ReactStyleProps {
  size?: Sizes;
}



interface LinkAlikeProps extends ReactStyleProps {
  onClick: () => any;
}

interface TabBarTab {
  title: string;
  id: string;
  options?: React.ReactNode;
}

interface TabBarProps extends ReactStyleProps{
  tabs: TabBarTab[];
  onChange: (_: any) => any;
  active: string;
  align?: string;
}

interface TbTTab extends TabBarTab{
  body: React.ReactNode;
}

interface TabsProps extends ReactStyleProps {
  tabs: TbTTab[];
  active?: string;
  alignTabs: 'left' | 'right' | string;
}

export { AsyncMultiSelectProps, AsyncSelectProps, ButtonProps, ButtonType, CCProps, CHProps, CVProps, CardActionsProps, CardBodyProps, CardProps, CardTitleProps, CheckboxProps, CollapsibleCardProps, ControlAreaProps, CountryFlagProps, CreatableMultiSelectProps, CreatableSelectProps, CurrencyProps, DatePrettyProps, DropdownProps, DurationProps, EProps, FieldControlProps, FieldMetaStateProps, FieldProps, FormTypes, GridProps, IconProps, InputProps, LinkAlikeProps, LoadingUntilProps, MultiSelectProps, OnChangeFunc, Pagination, PaginationFooterProps, RelativeTimeProps, SelectProps, SpinnerProps, Tab, TabBarProps, TabBarTab, TabbedCardProps, TabsProps, TbTTab, TextareaProps, TitleProps, TooltipMode, TooltipProps, YesNoIconProps };
