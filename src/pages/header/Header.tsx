import React from "react"

import MainLogo from './components/MainLogo'
import Nav from './components/Nav'


interface Header {
  pageText: string[];
  currPage: number;
  handlePage: (page: number) => void;
}

const Header = ({pageText, currPage, handlePage}: Header) => {
  return (
    <header>
      <MainLogo />
      <Nav pageText={pageText} currPage={currPage} handlePage={handlePage} />
    </header>
  );
}

export default Header
