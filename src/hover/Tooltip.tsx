import React, {useRef, useState} from "react";
import {TooltipProps} from "./types";
import {useRect} from "../util/useRect";


const Tooltip: React.FC<TooltipProps> = ({content, mode = 'hover', caret = true, position = 'bottom', show = false, children, className = '', style = {}}) => {
  const relativeRef = useRef(null);
  const popupRef = useRef(null);
  const wrapperRect = useRect(relativeRef);
  const popupRect = useRect(popupRef);
  const [display, setDisplay] = useState(mode === 'hover' ? false : show);

  const hoverHandler = (show) => {
    if (mode === 'hover') {
      if (!show) {
        setTimeout(() => setDisplay(show), 500);
      } else {
        setDisplay(show);
      }
    }
  };

  const clickHandler = () => {
    setDisplay((v) => !v);
  };

  console.log(wrapperRect);

  const popupOffset = {
    x: 0,
    y: 0,
  };

  const tooltipStyle = {
    left: '0px',
    top: '0px'
  };

  switch(position) {
    case "top":
      tooltipStyle.left = `${(wrapperRect.width / 2) - (popupRect.width / 2)}px`;
      tooltipStyle.top = `${(-1 *popupRect.height) - popupOffset.y}px`;
      break;
    case "right":
      tooltipStyle.left = `${wrapperRect.height / 2}px`;
      break;
    case "bottom":
      tooltipStyle.left = `${(wrapperRect.width / 2) - (popupRect.width / 2)}px`;
      tooltipStyle.top = `${(wrapperRect.height) + popupOffset.y}px`;
      break;
    case "left":
      tooltipStyle.top = `${(wrapperRect.height / 2) - (popupRect.height / 2)}px`;
      tooltipStyle.left = `${(-1 * popupRect.width) - popupOffset.x}px`;
      break;
    case "top-right":
      break;
    case "top-left":
      break;
    case "bottom-left":
      break;
    case "bottom-right":
      break;
    default:
      break;
  }

  return (
    <div onMouseLeave={() => hoverHandler(false)} className={'tooltip-wrapper'}>
      <span onMouseEnter={() => hoverHandler(true)} onClick={clickHandler} ref={relativeRef}>
        {children}
      </span>

      {display &&
      <div className={`tooltip ${caret ? 'tooltip--caret' : ''} tooltip--${position} ${className}`} style={{...tooltipStyle, ...style}} ref={popupRef}>
        {content}
      </div>
      }
    </div>
  );

};


export default Tooltip;
