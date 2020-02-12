import React from "react";
import Field from "../Field";
import {MultiSelectProps} from "../types";
import ReactSelect from 'react-select';
import {contains, find, prop, propEq} from "../../util/ram";

const MultiSelect: React.FC<MultiSelectProps> = (props) => {

  const {value, options = [], label, dirty, valid, touched, required, onChange, clearable = false, placeholder = 'Search...', className, style} = props;
  const oc = (item) => {
    onChange(item.map(({value}) => value));
  };

  const selected = options.filter(({value: val}) => contains(val, value));

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

export default MultiSelect;