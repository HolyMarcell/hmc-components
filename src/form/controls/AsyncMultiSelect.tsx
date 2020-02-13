import React from "react";
import Field from "../Field";
import {AsyncMultiSelectProps} from "../types";
import AsyncReactSelect from 'react-select/async';
import {isNil} from "../../util/ram";

const AsyncSelect: React.FC<AsyncMultiSelectProps> = (props) => {

  const {value, options = [], asyncOptions, dirty, valid, touched, required, onChange, clearable = false, placeholder = 'Search...', className, style} = props;
  const oc = (items) => {
    if(isNil(items)) {
      onChange([]);
    } else {
      onChange(items);
    }
  };

  return (
    <Field style={style} className={`${className}`} type={'select'} dirty={dirty} valid={valid} touched={touched}>
      <AsyncReactSelect
        isMulti
        placeholder={placeholder}
        clearValue
        isClearable={clearable}
        loadOptions={asyncOptions}
        defaultOptions={options}
        onChange={oc}
        value={value}
      />
    </Field>
  )
};

export default AsyncSelect;
