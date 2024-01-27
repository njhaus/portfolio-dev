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
    <li className={clsName}>
      <button onClick={() => {handlePage(pageNumber)}}>{pageText}</button>
    </li>
  );
}

export default Navitem
