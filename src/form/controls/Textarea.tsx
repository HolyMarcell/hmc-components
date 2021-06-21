import React, {useEffect, useState} from "react";
import {TextareaProps} from "../types";
import {Field} from "../Field";
import {isEmpty, isNil, pathOr} from "../../util/ram";


export const Textarea: React.FC<TextareaProps> = (props) => {
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

  const [rows, setRows] = useState(4);

  const oc = (e) => {
    const value = pathOr('', ['target', 'value'], e);
    onChange(value);
  };
  const cleanValue = isNil(value) ? '' : value;


  useEffect(() => {
    const newlines = (cleanValue.split("\n") || []).length;
    setRows(newlines < 4 ? 4 : newlines);
  }, [cleanValue]);


  const empty = isEmpty(cleanValue);

  return (
    <Field
      style={style}
      className={`textarea-field ${className}`}
      type={'input'}
      dirty={dirty}
      valid={valid}
      touched={touched}>
      <div className={'wrapper'}>

        <textarea
          rows={rows}
          className={'textarea'}
          value={cleanValue}
          onChange={oc}
        />
        <span className={`label ${empty ? 'label--placeholder' : 'label--top'}`}>{label} {`${required ? '*' : ''}`}</span>
      </div>
    </Field>
  );
};

