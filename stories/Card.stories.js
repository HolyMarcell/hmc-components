import React from 'react';
import {Card} from "../src";

export default {
  title: 'Card',
};


export const card = () => (
  <Card
    title={'Hello world'}
    topRight={<span>Link To somewhere</span>}
    actions={[<button>one</button>, <button>two</button>]}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloremque et numquam quo totam veritatis!
    A amet, cupiditate delectus doloribus eligendi error libero nam nemo odio quisquam rem similique, voluptas.
  </Card>)
;
