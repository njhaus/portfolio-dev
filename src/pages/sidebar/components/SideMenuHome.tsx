interface Sidemenu {
  pageText: string;
  pageNumber: number;
  welcomeScroll: number;
  prevScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
}

const SideMenuHome = ({
  pageText,
  pageNumber,
  prevScroll,
  welcomeScroll,
  handleWelcomeScroll,
}: Sidemenu) => {

  const selectIn = welcomeScroll !== pageNumber ? "" : welcomeScroll >= prevScroll ? "welcome-selected-top" : "welcome-selected-bottom";
  const selectOut = (prevScroll !== pageNumber || welcomeScroll === prevScroll ) ? "" : prevScroll > welcomeScroll ? "welcome-deselected-top" : "welcome-deselected-bottom";

  return (
    <div className="relative flex gap-2 my-5 px-2 z-10 items-center">
      <div
        className={`sidebar-circle relative bg-slate-300 border-main border rounded-full w-7 h-7 overflow-hidden`}
        onClick={() => {
          handleWelcomeScroll(pageNumber);
        }}
      >
        <div
          className={`absolute top-0 left-0 bg-white w-full h-full rounded-full opacity-0 ${selectIn} ${selectOut}`}
        ></div>
      </div>
      <button
        className={`hidden sm:block relative h-7 bg-slate-300 border-main border rounded-lg flex-grow overflow-hidden`}
        onClick={() => {
          handleWelcomeScroll(pageNumber);
        }}
      >
        <div
          className={`absolute top-0 left-0 bg-white w-full h-full white rounded-lg opacity-0 ${selectIn} ${selectOut}`}
        ></div>
        <p className="relative z-20">{pageText}</p>
      </button>
    </div>
  );
};

export default SideMenuHome;
