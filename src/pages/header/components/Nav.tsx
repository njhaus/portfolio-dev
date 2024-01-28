import React from 'react'

import NavItem from './Navitem'

interface Nav {
  pageText: string[];
  currPage: number;
  handlePage: (page: number) => void
}

const Nav = ({ pageText, currPage, handlePage }: Nav) => {



  return (
    <nav className="flex align-middle">
      <ul className="flex gap-12 align-middle">
        {pageText.map((pg, i) => (
          <NavItem
            key={i}
            pageText={pg}
            currPage={currPage}
            pageNumber={pageText.indexOf(pg)}
            handlePage={handlePage}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav
