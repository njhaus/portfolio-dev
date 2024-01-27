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
    <aside>
      <MainImg/>
      <ul>
        {pageText.map((pg) => (
          <SideMenu pageText={pg} currPage={currPage} pageNumber={pageText.indexOf(pg)} handlePage={handlePage} />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar
