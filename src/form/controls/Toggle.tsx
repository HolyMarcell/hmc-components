import React from "react";
import {ToggleProps} from "../types";
import Field from "../Field";
import {isNil} from "ramda";
import {Switch} from "antd";


export const Toggle: React.FC<ToggleProps> = (props) => {
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
        <Switch
          defaultChecked={cleanValue}
          checked={cleanValue}
          onChange={onChange}
        />
      </div>
    </Field>
  );
};
