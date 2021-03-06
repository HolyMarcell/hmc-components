import React from "react";
import {InputProps} from "../types";
import {Input as AntInput} from 'antd';
import {Field} from "../Field";
import {isEmpty, isNil, pathOr} from "ramda";

export const Input: React.FC<InputProps> = (props) => {
  const {
    value,
    onChange,
    label,
    dirty,
    touched,
    valid,
    required = false,
    htmlType = 'text',
    className = '',
    style = {},
    prefix,
    suffix,
    placeholder

  } = props;


  const oc = (e) => {
    onChange(pathOr('', ['target', 'value'], e));
  };

  const cleanValue = isNil(value) ? '' : value;

  const empty = isEmpty(cleanValue);

  return (
    <Field
      style={style}
      className={`input-field ${className}`}
      type={'input'}
      dirty={dirty}
      valid={valid}
      touched={touched}>
      <div className={'wrapper'}>

        <AntInput
          className={''}
          placeholder={placeholder}
          type={htmlType}
          value={cleanValue}
          onChange={oc}
          prefix={prefix}
          suffix={suffix}
        />
        <span className={`label ${empty ? 'label--placeholder' : 'label--top'}`}>{label} {`${required ? '*' : ''}`}</span>
      </div>
    </Field>
  );
};

