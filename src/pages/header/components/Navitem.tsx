interface NavItem {
  pageText: string;
  currPage: number;
  pageNumber: number;
  handlePage: (page: number) => void;
}

const Navitem = ({ pageText, currPage, pageNumber, handlePage }: NavItem) => {

    const clsName = currPage === pageNumber ? "selected" : "";
    
  return (
    <li className={`${clsName} flex align-middle`}>
      <button className={'text-slate-400'} onClick={() => {handlePage(pageNumber)}}>{pageText}</button>
    </li>
  );
}

export default Navitem
