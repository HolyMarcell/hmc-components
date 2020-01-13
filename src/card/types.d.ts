import React from "react";
import {ReactStyleProps} from "../commonTypes";

export interface CardTitleProps extends ReactStyleProps {
  topRight?: React.ReactNode;
}

export interface CardActionsProps extends ReactStyleProps {
}

export interface CardProps extends ReactStyleProps {
}

export interface CardBodyProps extends ReactStyleProps {
}

export interface Tab {
  title: React.ReactNode;
  body?: React.ReactNode;
}

export interface TabbedCardProps extends ReactStyleProps {
  tabs: Tab[];
  topRight?: React.ReactNode;
}

export interface CollapsibleCardProps extends ReactStyleProps {
  title: React.ReactNode;
  topRight?: React.ReactNode;
  collapsed?: boolean;
}

