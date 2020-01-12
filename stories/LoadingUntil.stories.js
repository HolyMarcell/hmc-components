import React from 'react';
import {Card, CardBody, LoadingUntil} from "../src";

export default {
  title: 'LoadingUntil',
};




export const loading = () => {
  return (
    <LoadingUntil loading={true}>
      content: never shown
    </LoadingUntil>
  )
};

export const until = () => {
  return (
    <LoadingUntil loading={false}>
      content: always shown
    </LoadingUntil>
  )
};


export const alt = () => {
  return (
    <LoadingUntil loading={true} alt={<Card>
      <CardBody>
        Spinning the load (custom)
      </CardBody>
    </Card>}>
      content: never shown
    </LoadingUntil>
  )
};
