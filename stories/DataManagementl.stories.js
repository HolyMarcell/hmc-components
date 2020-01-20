import React, {useState} from 'react';
import {Card, CardBody, LoadingUntil, PaginationFooter} from "../src";

export default {
  title: 'DataManagement',
};


export const paginationFooter = () => {
  const pagination = {
    "totalElements": 45,
    "totalPages": 5,
    "size": 10,
    "page": 0,
    "numberOfElements": 10
  };

  const pagination2 = {
    "totalElements": 209,
    "totalPages": 21,
    "size": 10,
    "page": 4,
    "numberOfElements": 10
  };

  const pagination3 = {
    "totalElements": 209,
    "totalPages": 21,
    "size": 10,
    "page": 0,
    "numberOfElements": 10
  };

  const [pag, setPag] = useState({
    "totalElements": 120,
    "totalPages": 12,
    "size": 10,
    "page": 0,
    "numberOfElements": 10
  });
  const onNext = () => setPag(v => ({...v, page: v.page + 1}));
  const onPrev = () => setPag(v => ({...v, page: v.page - 1}));
  const onPageSelect = (p) => setPag(v => ({...v, page: p}));

  const content = [
    'one',
    'two',
    'three',
    'four',
    'five',
  ];

  return (
    <div>
      Real example: {content[pag.page]}<br/><br/>
      <PaginationFooter pagination={{...pag, onNext, onPrev, onPageSelect}}/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <PaginationFooter pagination={pagination}/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>

      <PaginationFooter pagination={pagination2}/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <PaginationFooter pagination={pagination3}/>
    </div>
  )
};

export const loadingUntil = () => {
  return (
    <div>
      <LoadingUntil loading={true}>
        content: never shown
      </LoadingUntil>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <LoadingUntil loading={false}>
        content: always shown
      </LoadingUntil>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <LoadingUntil loading={true} alt={<Card>
        <CardBody>
          Spinning the load (custom)
        </CardBody>
      </Card>}>
        content: never shown
      </LoadingUntil>

      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>

      <LoadingUntil loading={true} hasData={true}>
        <div style={{height: '300px'}} className={'d-f f-jc-c f-ai-c'}>

        content: shown behind spinner
        </div>
      </LoadingUntil>
    </div>
  )
};


