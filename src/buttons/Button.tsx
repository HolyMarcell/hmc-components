import {ButtonType} from "./types";
import React, {useEffect, useRef, useState} from "react";
import {ReactClickable, ReactStyleProps, Sizes} from "../commonTypes";
import {is, isNil} from "../util/ram";
import {Spinner} from "../index";


export interface ButtonProps extends ReactStyleProps, ReactClickable {
  type?: ButtonType;
  disabled?: boolean;
  active?: boolean;
  promise?: boolean;
  loading?: boolean;
  appearance?: 'default' | 'subtle' | 'outlined' | 'text' | string;
  groupPos?: 'left' | 'middle' | 'right' | string;
  size?: Sizes;
}


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