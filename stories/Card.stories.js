import React from 'react';
import {Card, CardActions, CardBody, CardGrid, CardTitle} from "../src";

export default {
  title: 'Card',
};


export const card = () => (
  <Card>
    <CardTitle topRight={<span>Link To somewhere</span>}>Hello world</CardTitle>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque et numquam quo totam veritatis!
      A amet, cupiditate delectus doloribus eligendi error libero nam nemo odio quisquam rem similique, voluptas.
    </CardBody>
    <CardActions>
      <button>button one</button>
      <button>button two</button>
    </CardActions>
  </Card>);

export const plain = () => (
  <Card>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque et numquam quo totam veritatis!
      A amet, cupiditate delectus doloribus eligendi error libero nam nemo odio quisquam rem similique, voluptas.
    </CardBody>
  </Card>);


export const actions = () => (
  <Card>
    <CardBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque et numquam quo totam veritatis!
      A amet, cupiditate delectus doloribus eligendi error libero nam nemo odio quisquam rem similique, voluptas.
    </CardBody>
    <CardActions>
      <button>button one</button>
      <button>button two</button>
    </CardActions>
  </Card>);

