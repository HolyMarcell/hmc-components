import {ButtonProps} from "./types";
import React, {useEffect, useRef, useState} from "react";
import {is, isNil} from "../util/ram";
import Spinner from "../icon/Spinner";


export const Button: React.FC<ButtonProps> = (
  {
    type = 'default',
    disabled = false,
    active = false,
    promise = false,
    loading = false,
    appearance = 'default',
    groupPos,
    className = '',
    style = {},
    onClick,
    size = 'nm',
    children
  }) => {

  const [promiseOn, setPromiseOn] = useState(false);
  const mounted = useRef(null);
  useEffect(() => {
    mounted.current = true;
    return () => {mounted.current = false}
  });

  const oc = () => {
    if(disabled) {
      return;
    }
    if(!is(Function, onClick)) {
      return;
    }

    if(promise) {
      setPromiseOn(true);
      return onClick()
        .then(() => {
          mounted.current && setPromiseOn(false);
        });
    }
    onClick();
  };

  return (
    <button
      onClick={oc}
      style={style}
      className={`
      ${className} 
      btn btn--${type} 
      btn__${appearance} 
      ${disabled ? 'btn--disabled' : ''} 
      btn--${size} 
      ${active ? 'btn--active' : ''} 
      ${!isNil(groupPos) ? `btn--group-pos-${groupPos}` : ''}`}>

      {!loading && !promiseOn && children}
      {(loading || promiseOn) &&
      <Spinner />
      }

    </button>
  )
};

export default Button;
