import React from 'react';
import {Card, CardBody, CC, CH, CV, E, Grid} from "../src";

export default {
  title: 'Grid',
};


export const grid = () => (
  <Grid cols={'30px 1fr 1fr 2fr 10px'}>
    <E>frist</E>
    <E>middle</E>
    <E>last</E>
    <E>el</E>
    <E>el</E>
    <E>el</E>
    <E>el</E>
  </Grid>
);


export const gridCard = () => (
  <Card>
    <Grid className={'pd-nm'}>
      <E className={'b-r-c1'}>frist</E>
      <E>middle</E>
      <E>last</E>
      <E className={'b-r-c1'}>el</E>
      <E>el</E>
      <E>el</E>
      <E className={'b-r-c1'}>el</E>
    </Grid>
  </Card>);


export const centercenter = () => (
  <Card>
    <Grid className={'pd-nm'}>
      <E className={'b-r-c1'} style={{height: '100px'}}><CC>first: content inside CC-tags </CC></E>
      <E><CC>middle</CC></E>
      <E><CC>last</CC></E>

      <E className={'b-r-c1'}  style={{height: '100px'}}><CV>cv</CV></E>
      <E><CV>cenver vertical</CV></E>
      <E><CH>Center Horizontal</CH></E>

      <E className={'b-r-c1'}  style={{height: '100px'}}><CH>ch</CH></E>
    </Grid>
  </Card>);
