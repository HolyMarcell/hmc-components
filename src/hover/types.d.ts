import {BoxPlacement, ReactStyleProps} from "../commonTypes";
import React from "react";


export type TooltipMode = 'hover' | 'activated' | string;

export interface TooltipProps extends ReactStyleProps {
  mode?: TooltipMode;
  content: React.ReactNode;
  position?: BoxPlacement;
  show?: boolean;
  caret?: boolean;
}