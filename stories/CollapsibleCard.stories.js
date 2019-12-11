import React from 'react';
import {CardActions, CardBody, CollapsibleCard} from "../src";

export default {
  title: 'CollapsibleCard',
};



export const collapsible = () => (
  <CollapsibleCard title={'Great Prophet Zarquon'}>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam deserunt,
      dignissimos excepturi ipsum laboriosam laborum minima necessitatibus nemo praesentium
      provident quas quasi recusandae similique ullam ut voluptatem. Corporis, odit?
    </CardBody>
    <CardActions>Foo</CardActions>
  </CollapsibleCard>);
