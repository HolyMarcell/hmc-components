import React from "react";
import Field from "../Field";
import {AsyncSelectProps} from "../types";
import AsyncReactSelect from 'react-select/async';

const AsyncSelect: React.FC<AsyncSelectProps> = (props) => {
  const {
    value, asyncOptions, options = [], dirty, valid, touched,
    onChange, clearable = false, placeholder = 'Search...', className, style
  } = props;




  return (
    <Field style={style} className={`${className}`} type={'select'} dirty={dirty} valid={valid} touched={touched}>
      <AsyncReactSelect
        placeholder={placeholder}
        clearValue
        isClearable={clearable}
        loadOptions={asyncOptions}
        defaultOptions={options}
        onChange={onChange}
        value={value}/>
    </Field>
  )
};

export default AsyncSelect;
