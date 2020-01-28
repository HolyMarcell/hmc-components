import React from "react";
import Field from "../Field";
import {SelectProps} from "../types";
import ReactSelect from 'react-select';
import {find, prop, propEq, propOr} from "../../util/ram";

const Select: React.FC<SelectProps> = ({value, options = [], dirty, valid, touched, onChange, className, style}) => {
  const oc = (item) => {
    onChange(prop('value', item));
  };

  const selected = find(propEq('value', value))(options);

  return (
    <Field style={style} className={`${className}`} type={'select'} dirty={dirty} valid={valid} touched={touched}>
      <ReactSelect key={propOr('-1', 'length', options)}  options={options} onChange={oc} value={selected} />
    </Field>
  )
};

export default Select;