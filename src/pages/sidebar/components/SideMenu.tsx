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
    <div className={`flex gap-2 my-5 ${clsName}`}>
      <div className="bg-xLight border-main border rounded-full w-7 h-7"></div>
      <button
        className="h-8 bg-xLight border-main border rounded-lg flex-grow"
        onClick={() => {
          handlePage(pageNumber);
        }}
      >
        {pageText}
      </button>
    </div>
  );
}

export default SideMenu
