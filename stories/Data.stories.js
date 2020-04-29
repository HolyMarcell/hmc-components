import React from 'react';
import {CountryFlag, Currency, DatePretty, Duration, RelativeTime} from "../src";

export default {
  title: 'Data',
};


export const countryFlag = () => (<>
  <CountryFlag countryCode={'US'} /> <br/>
  <CountryFlag countryCode={'DE'} style={{width: '200px', height: '160px'}} /> <br/>
  <CountryFlag countryCode={'GB'} /> <br/>
  <CountryFlag countryCode={'FR'} /> <br/>
</>);

export const currency = () => (<>
  <Currency amount={10200012010} currency={'EUR'} locale={'de-DE'}/> <br/>
  <Currency amount={10200012010} currency={'EUR'}/> <br/>
  <Currency amount={10200012010} currency={'EUR'} locale={'jp-JP'}/> <br/>
  <Currency amount={10200012010} currency={'USD'} locale={'de-DE'}/> <br/>
  <Currency amount={10200012010} currency={'USD'}/> <br/>
</>);


export const relativeTime = () => (<>
  <RelativeTime date={'2019-11-12T10:22:22+0000'}/> <br/>
  <RelativeTime date={'2019-10-12T10:22:22+0000'}/> <br/>
  <RelativeTime date={'2019-12-12T10:22:22+0000'}/> <br/>
  <RelativeTime date={'2019-12-12T10:22:22+0000'} locale={'de-DE'}/> <br/>
</>);


export const duration = () => (<>
  <Duration length={10000}/> <br/>
  <Duration length={110000}/> <br/>
  <Duration length={1110000}/> <br/>
  <Duration length={11110000}/> <br/>
  <Duration length={11110000} locale={'de-DE'}/> <br/>
</>);


export const datePretty = () => (<>
  <p>Prop: 'format' accepts moment formatting</p>
  Browser Locale (short): <DatePretty date={'2019-11-12T10:22:22+0000'} format={'l'}/> <br/>
  Browser Locale (middle): <DatePretty date={'2019-10-12T10:22:22+0000'} format={'ll'}/> <br/>
  Browser Locale (long): <DatePretty date={'2019-10-12T10:22:22+0000'} format={'lll'}/> <br/>
  <br/>
  jp-JP (default): <DatePretty date={'2019-12-12T10:22:22+0000'} locale={'jp-JP'}/> <br/>
  de-DE (default): <DatePretty date={'2019-12-12T10:22:22+0000'} locale={'de-DE'}/> <br/>
</>);
