import {ReactStyleProps} from "../commonTypes";
import React from "react";

export interface LoadingUntilProps extends ReactStyleProps{
  loading: boolean;
  alt?: React.ReactNode;
}
