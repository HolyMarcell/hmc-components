import React, {useState} from 'react';
import {ControlArea, E, Grid} from '../src';

export default {
  title: 'Button',
};


const oc = () => alert('foo');

export const controlArea = () => (<div style={{width: '100px'}}>
  <ControlArea onClick={oc} type={'default'}>Default</ControlArea> <br/>
  <ControlArea onClick={oc} type={'primary'}>Primary</ControlArea> <br/>
  <ControlArea onClick={oc} type={'success'}>Success</ControlArea> <br/>
  <ControlArea onClick={oc} type={'info'}>Info</ControlArea> <br/>
  <ControlArea onClick={oc} type={'warn'}>Warn</ControlArea> <br/>
  <ControlArea onClick={oc} type={'danger'}>Danger</ControlArea> <br/>
</div>);


export const controlAreaInGrid = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Grid>

        <div style={{border: '1px solid #777', width: '100px', padding: '10px'}} onClick={() => setShow(v => !v)}> Show
        </div>
      </Grid>

      <br/>
      <br/>
      <br/>


      <Grid style={{width: '400px'}} cols={`1fr ${show ? '120px' : '0px'}`}>
        <E>lala </E>
        <E>
          <ControlArea onClick={oc} type={'default'}>Default</ControlArea>
        </E>

        <E>lala </E>
        <E><ControlArea onClick={oc} type={'primary'}>Primary</ControlArea></E>

        <E>lala </E>
        <E><ControlArea onClick={oc} type={'success'}>Success</ControlArea></E>

        <E>lala </E>
        <E className={'d-f'}><div className={'f-1'}></div><ControlArea onClick={oc} type={'info'}>Info</ControlArea></E>

        <E>lala </E>
        <E className={'d-f'}><ControlArea onClick={oc} type={'warn'}>Warn</ControlArea><ControlArea onClick={oc} type={'danger'}>Danger</ControlArea></E>

      </Grid>
    </div>
  );
}

