import { useState } from "react";

import { pageData } from "../../data/pageData";
import ContactMe from "./ContactMe";


interface iMenu {
  handlePage: (ind: number) => void;
  currPage: number;
  handleDialog: (set: boolean) => void;
  showMenu: boolean;
  handleMenu: () => void
}


const Menu = ({ handlePage, currPage, handleDialog, showMenu, handleMenu}: iMenu) => {

  return (
    <nav className={showMenu ? 'nav-menu show-menu' : "nav-menu"}>
      <button className="dialog-close menu-close" onClick={() => handleMenu()}>
        &#x2715;
      </button>
      {pageData.map((page, i) => (
        <button
          key={i}
          className={
            currPage === i ? "btn nav-btn menu-current" : "btn nav-btn"
          }
          onClick={() => {
            handlePage(i)
            handleMenu();
          }
          }
        >
          {page.pageText}
        </button>
      ))}
      <ContactMe handleDialog={handleDialog} handleMenu={handleMenu} />
    </nav>
  );
};

export default Menu;
