import React from 'react'
import SideMenu from '../sidebar/components/SideMenu'
import MainImg from './components/MainImg'


interface Sidebar {
    pageText: string[];
    currPage: number;
    handlePage: (page: number) => void;
}

const Sidebar = ({pageText, currPage, handlePage}: Sidebar) => {
  return (
    <aside className="bg-slate-200 h-full w-1/5 max-w-64 relative">
      <MainImg />
      <ul className="inline-block min-w-40">
        {pageText.map((pg) => (
          <SideMenu
            pageText={pg}
            currPage={currPage}
            pageNumber={pageText.indexOf(pg)}
            handlePage={handlePage}
          />
        ))}
      </ul>
      <div className="absolute bottom-2 left-1/2 flex gap-2 my-5 min-w-40 -translate-x-1/2">
        <div className="bg-xLight border-main border rounded-full w-7 h-7"></div>
        <button
          className="h-8 bg-xLight border-main border rounded-lg flex-grow"
          onClick={() => {
            //open contact me dialog
          }}
        >
          Contact me
        </button>
      </div>
    </aside>
  );
}

export default Sidebar
