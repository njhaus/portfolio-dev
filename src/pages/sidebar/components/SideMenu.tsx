interface Sidemenu {
  pageText: string;
  pageNumber: number;
  welcomeScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
}

const SideMenu = ({ pageText, pageNumber, welcomeScroll, handleWelcomeScroll }: Sidemenu) => {
  
  const clsName = welcomeScroll === pageNumber ? 'selected' : '';

  return (
    <div className={`flex gap-2 my-5 ${clsName}`}>
      <div className="bg-xLight border-main border rounded-full w-7 h-7"></div>
      <button
        className="h-8 bg-xLight border-main border rounded-lg flex-grow"
        onClick={() => {
          handleWelcomeScroll(pageNumber);
        }}
      >
        {pageText}
      </button>
    </div>
  );
}

export default SideMenu
