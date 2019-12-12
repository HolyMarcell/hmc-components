import React from 'react';
import {Currency, RelativeTime} from "../src";

export default {
  title: 'Data',
};


export const currency = () => (<>
  <Currency amount={10200012010} currency={'EUR'} locale={'de-DE'}/> <br/>
  <Currency amount={10200012010} currency={'EUR'}/> <br/>
  <Currency amount={10200012010} currency={'EUR'} locale={'jp-JP'}/> <br/>
  <Currency amount={10200012010} currency={'USD'} locale={'de-DE'}/> <br/>
  <Currency amount={10200012010} currency={'USD'}/> <br/>
</>);


export const relativeTime = () => (<>
  <RelativeTime date={'2019-11-12T10:22:22+0000'} /> <br/>
  <RelativeTime date={'2019-10-12T10:22:22+0000'} /> <br/>
  <RelativeTime date={'2019-12-12T10:22:22+0000'} /> <br/>
  <RelativeTime date={'2019-12-12T10:22:22+0000'} locale={'de-DE'} /> <br/>
</>);
