import React from "react";
import Field from "../Field";
import {SelectProps} from "../types";
import ReactSelect from 'react-select';
import {find, prop, propEq} from "../../util/ram";

const Select: React.FC<SelectProps> =
  ({
     value, options = [], dirty, valid, touched, onChange, clearable = false,
     placeholder = 'Search...', className, style
   }) => {
    const oc = (item) => {
      onChange(prop('value', item));
    };

    const selected = find(propEq('value', value))(options);

    return (
      <Field style={style} className={`${className}`} type={'select'} dirty={dirty} valid={valid} touched={touched}>
        <ReactSelect
          placeholder={placeholder}
          isClearable={clearable}
          options={options}
          onChange={oc}
          value={selected}/>
      </Field>
    )
  };

export default Select;
