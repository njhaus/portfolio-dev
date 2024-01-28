import React from 'react'

interface NavItem {
  pageText: string;
  currPage: number;
  pageNumber: number;
  handlePage: (page: number) => void;
}

const Navitem = ({ pageText, currPage, pageNumber, handlePage }: NavItem) => {

    const clsName = currPage === pageNumber ? "selected" : "";
    
  return (
    <li className={`${clsName} flex align-middle`}>
      <button className={'text-main'} onClick={() => {handlePage(pageNumber)}}>{pageText}</button>
    </li>
  );
}

export default Navitem
