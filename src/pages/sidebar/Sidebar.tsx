import SideMenu from '../sidebar/components/SideMenu'
import SideMenuHome from './components/SideMenuHome'
import MainImg from './components/MainImg'
import { pageTextHome } from '../../data/pageData'


interface Sidebar {
  currPage: number;
  pageText: string[];
  welcomeScroll: number;
  prevScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
  handlePage: (page: number) => void;
  handleDialog: (set: true) => void;
}

const Sidebar = ({currPage, pageText, welcomeScroll, prevScroll, handleWelcomeScroll, handlePage, handleDialog}: Sidebar) => {

  return (
    <>
      <div className="sidebar-decoration w-10 h-full bg-slate-200 absolute top-0 -right-10"></div>
      <MainImg />
      {currPage === 0 ? (
        <>
          {/* Display navigation on mobile. Display scroller on desktop */}
          <ul className="hidden side-menu min-w-40 md:inline-block">
            {pageTextHome.map((pg, i) => (
              <SideMenuHome
                key={i}
                pageText={pg}
                welcomeScroll={welcomeScroll}
                prevScroll={prevScroll}
                pageNumber={pageTextHome.indexOf(pg)}
                handleWelcomeScroll={handleWelcomeScroll}
              />
            ))}
          </ul>
          <ul className="side-menu inline-block min-w-40 md:hidden">
            {pageText.map((pg, i) => (
              <SideMenu
                key={i}
                pageText={pg}
                currPage={currPage}
                pageNumber={pageText.indexOf(pg)}
                handlePage={handlePage}
              />
            ))}
          </ul>
        </>
      ) : (
        <ul className="side-menu inline-block min-w-40">
          {pageText.map((pg, i) => (
            <SideMenu
              key={i}
              pageText={pg}
              currPage={currPage}
              pageNumber={pageText.indexOf(pg)}
              handlePage={handlePage}
            />
          ))}
        </ul>
      )}
      <div className="absolute bottom-2 flex gap-2 my-5 ps-2 z-10 items-start min-w-[10rem]">
        <div
          className="sidebar-circle relative bg-slate-100 border-main border rounded-full w-7 h-7"
          onClick={() => {
            handleDialog(true);
          }}
        ></div>
        <button
          className="hidden h-7 bg-slate-100 border-main border rounded-lg flex-grow md:block"
          onClick={() => {
            handleDialog(true);
          }}
        >
          <p>Contact me</p>
        </button>
      </div>
    </>
  );
}

export default Sidebar
