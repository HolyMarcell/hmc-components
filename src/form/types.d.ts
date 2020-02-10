import {DataItem, ReactStyleProps} from "../commonTypes";


export type OnChangeFunc = (value: any) => any;


export type FormTypes = 'string' | 'number' | 'select' | string;

export interface FieldMetaStateProps {
  dirty: boolean;
  valid: boolean;
  touched?: boolean;
  required?: boolean;
}

export interface FieldControlProps {
  value: any;
  onChange: OnChangeFunc;
}

export interface FieldProps extends ReactStyleProps, FieldMetaStateProps {
  type: FormTypes;
}


export interface SelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
}


export interface AsyncSelectProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  asyncOptions: (search) => Promise<DataItem[]>;
  options: DataItem[];
  clearable?: boolean;
  placeholder?: string;
}



export interface InputProps extends ReactStyleProps, FieldMetaStateProps, FieldControlProps {
  label?: string;
  htmlType?: 'text' | 'number' | 'password' | string;
}
