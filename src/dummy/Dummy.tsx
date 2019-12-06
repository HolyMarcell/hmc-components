import {DummyProps} from "../types"
import React, {useState} from "react";


const Dummy: React.FC<DummyProps> = ({foo}) => {
  const [st, setSt] = useState('wadismitmir');
  return (
    <div className={'pd-nm b-r-sm b-c1'}>{foo} {st} Hello</div>
  )
};

export default Dummy;
