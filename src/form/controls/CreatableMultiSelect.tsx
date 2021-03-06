import React from "react";
import {Field} from "../Field";
import {CreatableMultiSelectProps} from "../types";
import ReactCreatableSelect from 'react-select/creatable';
import {isNil} from "ramda";

export const CreatableMultiSelect: React.FC<CreatableMultiSelectProps> = (props) => {

  const {value, options = [], label, dirty, valid, touched, required,
    onChange, clearable = false, placeholder = 'Search...', className, style} = props;
  const oc = (item) => {
    if(isNil(item)) {
      onChange([]);
    } else {
      onChange(item.map(({value}) => value));
    }
  };

  const selected = isNil(value) ? [] : value;

  return (
    <Field
      style={style}
      className={`select-field ${className}`}
      type={'select'}
      dirty={dirty}
      valid={valid}
      touched={touched}>
      <span className={`label`}>{label} {`${required ? '*' : ''}`}</span>
      <ReactCreatableSelect
        placeholder={placeholder}
        isMulti={true}
        isClearable={clearable}
        options={options}
        onChange={oc}
        value={selected}/>
    </Field>
  )
};

