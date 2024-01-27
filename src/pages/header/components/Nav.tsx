import React from 'react'

import NavItem from './Navitem'

interface Nav {
  pageText: string[];
  currPage: number;
  handlePage: (page: number) => void
}

const Nav = ({ pageText, currPage, handlePage }: Nav) => {



  return (
    <nav>
      <ul>
        {pageText.map((pg) => (
          <NavItem
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
