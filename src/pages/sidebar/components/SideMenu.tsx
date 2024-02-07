interface Sidemenu {
  pageText: string;
  currPage: number;
  pageNumber: number;
  handlePage: (page: number) => void;
}

const SideMenu = ({ pageText, currPage, pageNumber, handlePage }: Sidemenu) => {
  
  const clsName = pageNumber === currPage ? 'highlight' : '';

  return (
    <div className={`relative flex gap-2 my-5 ps-2 z-10 items-center `}>
      <div
        className={`sidebar-circle relative bg-slate-300 border-main border rounded-full w-7 h-7 ${clsName}`}
        onClick={() => {
          handlePage(pageNumber);
        }}
      ></div>
      <button
        className={`hidden sm:block h-7 bg-slate-300 border-main border rounded-lg flex-grow ${clsName}`}
        onClick={() => {
          handlePage(pageNumber);
        }}
      >
        {pageText}
      </button>
    </div>
  );
}

export default SideMenu
