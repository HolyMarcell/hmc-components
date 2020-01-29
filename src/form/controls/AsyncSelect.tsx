import React from "react";
import Field from "../Field";
import {AsyncSelectProps} from "../types";
import AsyncReactSelect from 'react-select/async';
import {find, prop, propEq} from "../../util/ram";

const AsyncSelect: React.FC<AsyncSelectProps> = ({value, asyncOptions, options = [], dirty, valid, touched, onChange, className, style}) => {
  const oc = (item) => {
    onChange(prop('value', item));
  };

  const selected = find(propEq('value', value))(options);

  return (
    <Field style={style} className={`${className}`} type={'select'} dirty={dirty} valid={valid} touched={touched}>
      <AsyncReactSelect
        loadOptions={asyncOptions}
        defaultOptions={options}
        onChange={oc}
        value={selected} />
    </Field>
  )
};

export default AsyncSelect;
