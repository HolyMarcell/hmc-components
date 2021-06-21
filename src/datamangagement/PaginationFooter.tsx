import React from 'react';
import {Button} from '../buttons/Button';
import {Icon} from '../icon/Icon';
import {filter, range} from '../util/ram';
import {PaginationFooterProps} from "./types";


export const PaginationFooter: React.FC<PaginationFooterProps> = (
  {
    pagination,
    showTotal = true,
    prevNextBtns = true,
    totalLabel = 'Total',
    className = '',
    style = {}
  }) => {
  const {numberOfElements, size, totalElements, totalPages, page, onNext, onPageSelect, onPrev} = pagination;

  // Calculations start at 0, just as teh pagination
  let pageList = [];
  if (totalPages <= 5) {
    pageList = range(0, totalPages);
  } else {

    pageList = range(page - 2, page + 3); // 5
    pageList = filter(a => a >= 0, pageList);
    pageList = filter(a => a < totalPages, pageList);

    // add starter
    if (page - 2 > 0) {
      if(page - 3 === 0) {
        pageList = [0,].concat(pageList);
      } else {
        pageList = [0, '..'].concat(pageList);
      }
    }

    // add ender
    if (page + 3 < totalPages) {
      if (page + 4 === totalPages) {
        pageList = pageList.concat([totalPages - 1])
      } else {
        pageList = pageList.concat(['..', totalPages - 1]);
      }
    }

  }

  // increment for display uses
  const displayedPages = pageList.map((e) => {
    return e === '..' ? '..' : e + 1;
  });

  const hasPrev = page > 0;
  const hasNext = page < totalPages - 1;


  return (
    <div className={`pagination-footer ${className}`} style={style}>

      {prevNextBtns &&
      <Button appearance={'text'} onClick={onPrev} disabled={!hasPrev} className={'prev'}>
        <Icon icon={'caret-left'}/>
      </Button>
      }

      {displayedPages.map((pag, index) => {
        if (pag !== '..') {
          return (
            <Button
              className={'page-select'}
              appearance={'text'}
              key={`${index}`}
              onClick={() => onPageSelect(pag - 1)}>
              {pag - 1 === page &&
              <span className={'txt-b'}>{pag}</span>
              }
              {pag - 1 !== page &&
              <span>{pag}</span>
              }
            </Button>
          );
        } else {
          return (<div className={'ellipsis'} key={index}>..</div>)
        }
      })}

      {prevNextBtns &&
      <Button appearance={'text'} onClick={onNext} disabled={!hasNext} className={'next'}>
        <Icon icon={'caret-right'}/>
      </Button>
      }

      {showTotal &&
      <div className={'total'}>
        {totalLabel}: {totalElements}
      </div>
      }
    </div>
  )
};
