import {ReactStyleProps} from "../commonTypes";
import React from "react";

export interface LoadingUntilProps extends ReactStyleProps{
  loading: boolean;
  hasData?: boolean;
  alt?: React.ReactNode;
}

export interface Pagination {
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  page: number;
  onNext: () => { go: () => Promise<any> };
  onPrev: () => { go: () => Promise<any> };
  onPageSelect: (page: number) => { go: () => Promise<any> };
}

export interface PaginationFooterProps extends ReactStyleProps {
  pagination: Pagination;
  showTotal?: boolean;
  prevNextBtns?: boolean;
  totalLabel?: string;
}
