import React from 'react'

interface Sidemenu {
  pageText: string;
  currPage: number;
  pageNumber: number;
  handlePage: (page: number) => void;
}

const SideMenu = ({ pageText, currPage, pageNumber, handlePage }: Sidemenu) => {
  
  const clsName = currPage === pageNumber ? 'selected' : '';

  return (
    <div className={clsName}>
      <button onClick={() => {handlePage(pageNumber)}}>
        <div>()</div>
        {pageText}
      </button>
    </div>
  );
}

export default SideMenu
