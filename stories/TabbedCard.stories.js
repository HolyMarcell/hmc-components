import React from 'react';
import TabbedCard from "../src/card/TabbedCard";
import {CardActions, CardBody} from "../src";

export default {
  title: 'TabbedCard',
};

const tabs = [
  {
    title: <>Foo</>, body: <CardBody>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, cum,
        deleniti, dolorum esse et excepturi ipsam nam neque nihil omnis possimus praesentium
        quibusdam voluptatibus? Commodi doloribus ex id incidunt officiis!</p>
    </CardBody>
  },
  {
    title: <>Br</>, body: <CardBody>
      <p>Lorem ipsum dolor Bbauz bazex id incidunt officiis!</p>
    </CardBody>
  }
];


export const tabbedCard = () => (
  <TabbedCard tabs={tabs}>
    <CardActions>Foo</CardActions>
  </TabbedCard>);
