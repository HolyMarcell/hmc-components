import React from "react";
import {CheckboxProps} from "../types";
import Field from "../Field";
import {isEmpty, isNil, pathOr} from "../../util/ram";


const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    value,
    onChange,
    label,
    dirty,
    touched,
    valid,
    required = false,
    className = '',
    style = {}
  } = props;


  const oc = (e) => {
    onChange(pathOr('', ['target', 'checked'], e));
  };

  const cleanValue = isNil(value) ? false : value;

  return (
    <Field
      style={style}
      className={`checkbox-field ${className}`}
      type={'checkbox'}
      dirty={dirty}
      valid={valid}
      touched={touched}>
      <div className={'wrapper'}>

        <span className={`label `}>{label} {`${required ? '*' : ''}`}</span>
        <input
          type={'checkbox'}
          className={'checkbox'}
          value={cleanValue}
          onChange={oc}
        />
      </div>
    </Field>
  );
};

export default Checkbox;