import {BoxPlacement} from "../commonTypes";
import React from "react";


export type TooltipMode = 'hover' | 'activated' | string;

export interface TooltipProps {
  mode?: TooltipMode;
  content: React.ReactNode;
  position?: BoxPlacement;
  caret?: boolean;
  show?: boolean;
}


export interface DropdownProps {
  content: React.ReactNode;
  position?: BoxPlacement;
  caret?: boolean;
  show?: boolean;
}