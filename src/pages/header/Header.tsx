import React from "react"

import MainLogo from './components/MainLogo'
import Nav from './components/Nav'

import {headingHeight} from '../../styles/styleVariables'


interface Header {
  pageText: string[];
  currPage: number;
  handlePage: (page: number) => void;
}

const Header = ({pageText, currPage, handlePage}: Header) => {
  return (
    <header className={`sticky top-0 px-5 flex justify-between align-middle h-${headingHeight} w-full pt-3`}>
      <MainLogo />
      <Nav pageText={pageText} currPage={currPage} handlePage={handlePage} />
    </header>
  );
}

export default Header
