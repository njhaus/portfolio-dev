import { useEffect, useState } from "react";

import NavItem from "./Navitem";

interface Nav {
  pageText: string[];
  currPage: number;
  handlePage: (page: number) => void;
}

const Nav = ({ pageText, currPage, handlePage }: Nav) => {

    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        setNavOpen(false)
    }, [currPage])

  return (
    <nav className="relative inline-block z-50 md:hidden">
      {navOpen && (
        <div
          className="h-screen w-screen absolute top-0 left-0 z-10"
          onClick={() => setNavOpen(false)}
        ></div>
      )}
      <div
        className="flex flex-col justify-center items-center h-10 cursor-pointer"
        onClick={() => setNavOpen(!navOpen)}
      >
        <div className="w-7 h-[2px] mb-2 bg-slate-600"></div>
        <div className="w-7 h-[2px] mb-2 bg-slate-600"></div>
        <div className="w-7 h-[2px] mb-2 bg-slate-600"></div>
      </div>
      {navOpen && (
        <ul className="flex flex-col align-middle absolute z-20 bg-white rounded-xl shadow-md border border-slate-100 pt-10 right-0 sm:right-5 top-14 sm:top-14 w-less sm:w-fit h-less sm:h-fit">
          {pageText.map((pg, i) => (
            <div key={i} className="w-100 h-100 px-10">
              <NavItem
                pageText={pg}
                currPage={currPage}
                pageNumber={pageText.indexOf(pg)}
                handlePage={handlePage}
              />
              <hr className="bg-slate-400 my-5"></hr>
            </div>
          ))}
          <div className="dialog-decoration h-5 w-full mb-[-1px] bg-slate-200"></div>
          <div className="w-full flex-grow bg-slate-200"></div>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
