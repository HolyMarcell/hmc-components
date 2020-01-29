import React from 'react';
import {AsyncSelect, Select} from "../src";

export default {
  title: 'Form Fields',
};


const oc = (v) => alert(v);

export const select = () => {
  const options = [
    {value: 'foo', label: 'Foo'},
    {value: 'bar', label: 'Bar'},
    {value: 'baz', label: 'Baz'},
    {value: 'buz', label: 'Buz'},
    {value: 'fiz', label: 'Fiz'},
  ];

  return (
    <div style={{width: '200px'}}>
      <h3>Select</h3>
      <Select options={options} dirty={false} onChange={oc} valid={true} value={'baz'} touched={false} />
    </div>
  );
};

export const asyncSelect = () => {
  const options = [
    {value: 'foo', label: 'Foo: search for bar'},
  ];

  const asyncOptions = (search) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([{label: 'bar', value: 'bar'}]);
      }, 1000);
    });

  };

  return (
    <div style={{width: '200px'}}>
      <h3>Select</h3>
      <AsyncSelect
        asyncOptions={asyncOptions}
        options={options}
        dirty={false}
        onChange={oc}
        valid={true}
        value={'baz'}
        touched={false} />
    </div>
  );
};
