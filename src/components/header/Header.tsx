import { useState } from "react";

import Logo from "../parts/Logo"
import Menu from "./Menu"
import MainImg from "../parts/MainImg";


interface iHeader {
  handlePage: (ind: number) => void;
  currPage: number;
  handleDialog: (set: boolean) => void;
}

const Header = ({ handlePage, currPage, handleDialog }: iHeader) => {
  

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <header>
      <div className="header-section">
        <MainImg/>
      </div>
      <Logo handlePage={handlePage} />
      <div className="header-btn-container header-section">
        <div className="btn-brush menu-btn">
          <button className="btn" onClick={() => handleMenu()}>Menu</button>
        </div>
        <Menu
          handlePage={handlePage}
          currPage={currPage}
          handleDialog={handleDialog}
          showMenu={showMenu}
          handleMenu={handleMenu}
        />
      </div>
    </header>
  );
}

export default Header
