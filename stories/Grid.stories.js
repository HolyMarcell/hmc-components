import React from 'react';
import {Card, CardBody, E, Grid} from "../src";

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