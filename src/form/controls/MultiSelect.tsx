import React from "react";
import {Field} from "../Field";
import {MultiSelectProps} from "../types";
import ReactSelect from 'react-select';
import {contains, isNil} from "ramda";

export const MultiSelect: React.FC<MultiSelectProps> = (props) => {

  const {value, options = [], label, dirty, valid,
    touched, required, onChange, clearable = false,
    placeholder = 'Search...', className, style} = props;
  const oc = (item) => {
    if(isNil(item)) {
      onChange([]);
    } else {
      onChange(item.map(({value}) => value));
    }
  };

  const selected = isNil(value) ? [] : options.filter(({value: val}) => contains(val, value));

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
        isMulti
        placeholder={placeholder}
        isClearable={clearable}
        options={options}
        onChange={oc}
        value={selected}/>
    </Field>
  )
};

