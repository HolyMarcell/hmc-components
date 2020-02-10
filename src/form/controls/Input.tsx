import React from "react";
import {InputProps} from "../types";
import Field from "../Field";
import {is, isEmpty, isNil, pathOr} from "../../util/ram";


const Input: React.FC<InputProps> = (props) => {
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
    style = {}
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

        <input
          pattern={htmlType === 'number' ? '/^[0-9]*$/' : undefined}
          className={'input'}
          type={htmlType}
          value={cleanValue}
          onChange={oc}
        />
        <span className={`label ${empty ? 'label--placeholder' : 'label--top'}`}>{label} {`${required ? '*' : ''}`}</span>
      </div>
    </Field>
  );
};

export default Input;
