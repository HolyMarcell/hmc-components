import {DataItem, ReactStyleProps} from "../commonTypes";


export type OnChangeFunc = (value: any) => any;


export type FormTypes = 'string' | 'number' | 'select' | string;

export interface FieldMetaStateProps {
  dirty?: boolean;
  valid?: boolean;
  touched?: boolean;
  required?: boolean;
}

export interface FieldControlProps {
  name?: string;
  value?: any;
  onChange: OnChangeFunc;
}

export interface FieldProps extends ReactStyleProps, FieldMetaStateProps {
  type: FormTypes;
}


export interface SelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options?: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

export interface CreatableSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

export interface CreatableMultiSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options?: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}

export interface MultiSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
  label?: string;
}


export interface AsyncSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  asyncOptions: (search) => Promise<DataItem[]>;
  options: DataItem[] | boolean;
  label?: string;
  clearable?: boolean;
  placeholder?: string;
}
export interface AsyncMultiSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  asyncOptions: (search) => Promise<DataItem[]>;
  options: DataItem[] | boolean;
  label?: string;
  clearable?: boolean;
  placeholder?: string;
}



export interface InputProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
  htmlType?: 'text' | 'number' | 'password' | string;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}

export interface InputNumberProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
  htmlType?: 'text' | 'number' | 'password' | string;
  prefix?: string;
  min?: number;
  max?: number;
  precision?: number;
  formatter?: (value: any) => any;
  parser?: (value: any) => any;
  placeholder?: string;
}

export interface CheckboxProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
}

export interface ToggleProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
}


export interface TextareaProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
}
