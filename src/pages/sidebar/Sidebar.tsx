import SideMenu from '../sidebar/components/SideMenu'
import SideMenuHome from './components/SideMenuHome'
import MainImg from './components/MainImg'


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
    <aside className="relative w-5 bg-slate-200 h-full max-w-64 me-10 sm:w-1/5">
      <div className="sidebar-decoration w-10 h-full bg-slate-200 absolute top-0 -right-10"></div>
      <MainImg />
      {currPage === 0 ? (
        <ul className="side-menu inline-block min-w-40">
          {pageText.map((pg, i) => (
            <SideMenuHome
              key={i}
              pageText={pg}
              welcomeScroll={welcomeScroll}
              prevScroll={prevScroll}
              pageNumber={pageText.indexOf(pg)}
              handleWelcomeScroll={handleWelcomeScroll}
            />
          ))}
        </ul>
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
      <div className="absolute bottom-2 left-0 sm:left-1/2 flex gap-2 my-5 min-w-40 sm:-translate-x-1/2 ps-2 items-center sm:justify-center">
        <div
          className="sidebar-circle bg-slate-100 border-main border rounded-full w-7 h-7"
          onClick={() => {
            handleDialog(true);
          }}
        ></div>
        <button
          className="hidden h-8 bg-slate-100 border-main border rounded-lg flex-grow sm:block"
          onClick={() => {
            handleDialog(true);
          }}
        >
          <p>Contact me</p>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar
