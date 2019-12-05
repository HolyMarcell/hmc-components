import {DummyProps} from "../types"
import React, {useState} from "react";


const Dummy: React.FC<DummyProps> = ({foo}) => {
  const [st, setSt] = useState('wadismitmir');
  return (
    <div>{foo} {st} Hello</div>
  )
};

export default Dummy;