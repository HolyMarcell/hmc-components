import React from "react";
import {InputNumberProps} from "../types";
import {Field} from "../Field";
import {isEmpty, isNil, pathOr} from "../../util/ram";
import {InputNumber as AntInput} from 'antd';

export const NumberInput: React.FC<InputNumberProps> = (props) => {
  const {
    value,
    onChange,
    label,
    dirty,
    touched,
    valid,
    min,
    max,
    formatter,
    parser,
    precision,
    required = false,
    htmlType = 'text',
    className = '',
    style = {},
    prefix,
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
          onChange={onChange}
          precision={precision}
          min={min}
          max={max}
          formatter={formatter}
          parser={parser}
          prefix={prefix}
        />
        <span className={`label ${empty ? 'label--placeholder' : 'label--top'}`}>{label} {`${required ? '*' : ''}`}</span>
      </div>
    </Field>
  );
};
