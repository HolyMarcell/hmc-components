import {DataItem, ReactStyleProps} from "../commonTypes";


export type OnChangeFunc = (value: any) => any;


export type FormTypes = 'string' | 'number' | 'select' | string;

export interface FieldProps extends ReactStyleProps {
  type: FormTypes;
  dirty: boolean;
  valid: boolean;
  touched?: boolean;
}


export interface SelectProps extends ReactStyleProps {
  value: any;
  options: DataItem[];
  dirty: boolean;
  valid: boolean;
  touched?: boolean;
  onChange: OnChangeFunc;
}


export interface AsyncSelectProps extends ReactStyleProps {
  value: any;
  asyncOptions: (search) => Promise<DataItem[]>;
  options: DataItem[];
  dirty: boolean;
  valid: boolean;
  touched?: boolean;
  onChange: OnChangeFunc;
}



