import React, {useState} from 'react';
import {AsyncSelect, Checkbox, Input, MultiSelect, Select, Textarea} from "../src";
import {isNil} from "../src/util/ram";

export default {
  title: 'Form Fields',
};


const oc = (v) => alert(v);

export const input = () => {

  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(null);


  return (
    <div>
      <Input label={'Laibel'} onChange={setVal} value={val} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <Input label={'Laibel'} onChange={setVal2} htmlType={'number'} value={val2} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <br/>

      <Input label={'Laibel'} onChange={setVal} htmlType={'password'} value={val} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <Input label={'Laibel'} onChange={setVal} value={val} valid={true} dirty={!isNil(val)} /> <br/> <br/>
    </div>
  )
};

export const checkbox = () => {

  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(null);



  return (
    <div style={{width: '300px', margin: '0 auto'}}>
      <Checkbox label={'Laibel'} onChange={setVal} value={val} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <Checkbox label={'Laibel'} onChange={setVal2} value={val2} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <br/>

    </div>
  )
};

export const textarea = () => {

  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(null);



  return (
    <div>
      <Textarea label={'Laibel'} onChange={setVal} value={val} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <Textarea label={'Laibel'} onChange={setVal2} value={val2} valid={true} dirty={!isNil(val)} /> <br/> <br/>

      <br/>

    </div>
  )
};


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


export const multiSelect = () => {
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
      <MultiSelect options={options} dirty={false} onChange={oc} valid={true} value={'baz'} touched={false} />
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
