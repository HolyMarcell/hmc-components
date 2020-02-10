import React, {useState} from 'react';
import {AsyncSelect, Input, Select} from "../src";
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
      <Input label={'Laibel'} onChange={setVal} value={val} valid={true} dirty={!isNil(val)} placeholder={'Place the holder'} /> <br/> <br/>

      <Input label={'Laibel'} onChange={setVal2} htmlType={'number'} value={val2} valid={true} dirty={!isNil(val)} placeholder={'Place the holder'} /> <br/> <br/>

      <br/>

      <Input label={'Laibel'} onChange={setVal} htmlType={'password'} value={val} valid={true} dirty={!isNil(val)} placeholder={'Place the holder'} /> <br/> <br/>

      <Input label={'Laibel'} onChange={setVal} value={val} valid={true} dirty={!isNil(val)} placeholder={'Place the holder'} /> <br/> <br/>
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
