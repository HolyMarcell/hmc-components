import React from 'react';


export interface Pagination {
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
  page: number;
  onNext: () => {go: () => Promise<any>};
  onPrev: () => {go: () => Promise<any>};
  onPageSelect: (page: number) => {go: () => Promise<any>};
}

export interface PaginationFooterProps {
  pagination: Pagination;
  showTotal?: boolean;
  prevNextBtns?: boolean;
}

const PaginationFooter: React.FC<PaginationFooterProps> = ({pagination, showTotal = true, prevNextBtns = true}) => {

  const {numberOfElements, size, totalElements, totalPages, page, onNext, onPageSelect, onPrev} = pagination;
  return (
    <div className={'pagination-footer'}>
      // TODO Pagination
    </div>
  )
};

export default PaginationFooter;
