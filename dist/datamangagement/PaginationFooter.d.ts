import React from 'react';
export interface Pagination {
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
    page: number;
    onNext: () => {
        go: () => Promise<any>;
    };
    onPrev: () => {
        go: () => Promise<any>;
    };
    onPageSelect: (page: number) => {
        go: () => Promise<any>;
    };
}
export interface PaginationFooterProps {
    pagination: Pagination;
    showTotal?: boolean;
    prevNextBtns?: boolean;
}
declare const PaginationFooter: React.FC<PaginationFooterProps>;
export default PaginationFooter;
