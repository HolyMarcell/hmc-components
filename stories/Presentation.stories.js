import React from 'react';
import {LinkAlike, Title} from "../src";

export default {
  title: 'Presentation',
};


export const title = () => (<>
  <Title size={'xs'}>Title XS</Title><br/><br/>
  <Title size={'sm'}>Title SM</Title><br/><br/>
  <Title size={'md'}>Title MD</Title><br/><br/>
  <Title size={'nm'}>Title NM</Title><br/><br/>
  <Title size={'lg'}>Title LG</Title><br/><br/>
  <Title size={'xl'}>Title XL</Title><br/><br/>
</>);


export const linkAlike = () => {

  return (
    <LinkAlike onClick={() => alert('foo')}>Link alike</LinkAlike>
  )
};
