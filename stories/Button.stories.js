import React, {useState} from 'react';
import {Button, ControlArea, E, Grid} from '../src';

export default {
  title: 'Button',
};


const oc = () => alert('foo');

export const button = () => (<div style={{width: '200px'}}>
  <h3>Default</h3>
  <Button onClick={oc} type={'default'}>Default</Button> <br/><br/>
  <Button onClick={oc} type={'primary'}>Primary</Button> <br/><br/>
  <Button onClick={oc} type={'success'}>Success</Button> <br/><br/>
  <Button onClick={oc} type={'info'}>Info</Button> <br/><br/>
  <Button onClick={oc} type={'warn'}>Warn</Button> <br/><br/>
  <Button onClick={oc} type={'danger'}>Danger</Button> <br/><br/>
  <Button onClick={oc} type={'danger'} disabled={true}>Disabled</Button> <br/><br/>

  <br/><hr/><br/>
  <h3>Sizes</h3>

  <Button onClick={oc} size={'xs'} type={'default'}>Wacken</Button> <br/><br/>
  <Button onClick={oc} size={'sm'} type={'primary'}>Wacken</Button> <br/><br/>
  <Button onClick={oc} size={'nm'} type={'success'}>Wacken</Button> <br/><br/>
  <Button onClick={oc} size={'md'} type={'info'}>Wacken</Button> <br/><br/>
  <Button onClick={oc} size={'lg'} type={'warn'}>Wacken</Button> <br/><br/>
  <Button onClick={oc} size={'xl'} type={'danger'}>Wacken</Button> <br/><br/>
  <Button onClick={oc} size={'xl'} type={'danger'} disabled={true}>Disabled</Button> <br/><br/>
  <br/><hr/><br/>

  <h3>Subtle</h3>
  <Button onClick={oc} appearance={'subtle'} type={'default'}>Default</Button> <br/><br/>
  <Button onClick={oc} appearance={'subtle'} type={'primary'}>Primary</Button> <br/><br/>
  <Button onClick={oc} appearance={'subtle'} type={'success'}>Success</Button> <br/><br/>
  <Button onClick={oc} appearance={'subtle'} type={'info'}>Info</Button> <br/><br/>
  <Button onClick={oc} appearance={'subtle'} type={'warn'}>Warn</Button> <br/><br/>
  <Button onClick={oc} appearance={'subtle'} type={'danger'}>Danger</Button> <br/><br/>
  <Button onClick={oc} appearance={'subtle'} type={'danger'} disabled={true}>Disabled</Button> <br/><br/>

  <br/><hr/><br/>

  <h3>Outlined</h3>
  <Button onClick={oc} appearance={'outlined'} type={'default'}>Default</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'primary'}>Primary</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'success'}>Success</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'info'}>Info</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'warn'}>Warn</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'danger'}>Danger</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'danger'} disabled={true}>Disabled</Button> <br/><br/>
  <br/>
  <Button onClick={oc} appearance={'outlined'} type={'primary'} active={true}>Primary</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'success'} active={true}>Success</Button> <br/><br/>
  <Button onClick={oc} appearance={'outlined'} type={'info'} active={true}>Info</Button> <br/><br/>

  <br/><hr/><br/>

  <h3>Text</h3>
  <Button onClick={oc} size={'xs'} appearance={'text'} type={'default'}>Default</Button> <br/><br/>
  <Button onClick={oc} size={'sm'} appearance={'text'} type={'primary'}>Primary</Button> <br/><br/>
  <Button onClick={oc} size={'nm'} appearance={'text'} type={'success'}>Success</Button> <br/><br/>
  <Button onClick={oc} size={'md'} appearance={'text'} type={'info'}>Info</Button> <br/><br/>
  <Button onClick={oc} size={'lg'} appearance={'text'} type={'warn'}>Warn</Button> <br/><br/>
  <Button onClick={oc} size={'xl'} appearance={'text'} type={'danger'}>Danger</Button> <br/><br/>
  <Button onClick={oc} size={'xl'} appearance={'text'} type={'danger'} disabled={true}>Disabled</Button> <br/><br/>

  <br/><hr/><br/>

</div>);



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

