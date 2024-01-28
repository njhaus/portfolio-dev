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
    <aside className='bg-slate-200 h-full w-1/5 max-w-64'>
      <MainImg/>
      <ul className='inline-block min-w-44'>
        {pageText.map((pg) => (
          <SideMenu pageText={pg} currPage={currPage} pageNumber={pageText.indexOf(pg)} handlePage={handlePage} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar
