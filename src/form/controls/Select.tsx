import React from "react";
import {Field} from "../Field";
import {SelectProps} from "../types";
import ReactSelect from 'react-select';
import {find, prop, propEq} from "../../util/ram";

export const Select: React.FC<SelectProps> = (props) => {

  const {value, options = [], label, dirty, valid, touched, required, onChange, clearable = false, placeholder = 'Search...', className, style} = props;
  const oc = (item) => {
    onChange(prop('value', item));
  };

  const selected = find(propEq('value', value))(options);

  return (
    <Field
      style={style}
      className={`select-field ${className}`}
      type={'select'}
      dirty={dirty}
      valid={valid}
      touched={touched}>
      <span className={`label`}>{label} {`${required ? '*' : ''}`}</span>
      <ReactSelect
        placeholder={placeholder}
        isClearable={clearable}
        options={options}
        onChange={oc}
        value={selected}/>
    </Field>
  )
};

