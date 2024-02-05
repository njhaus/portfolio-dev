import MainLogo from '../../components/MainLogo'
import DesktopNav from './components/DesktopNav'
import MobileNav from './components/MobileNav'

import {headingHeight} from '../../styles/styleVariables'


interface Header {
  pageText: string[];
  currPage: number;
  handlePage: (page: number) => void;
}

const Header = ({pageText, currPage, handlePage}: Header) => {
  return (
    <header className={`sticky top-0 px-5 flex justify-between align-middle h-${headingHeight} w-full pt-3 z-40`}>
      <div className='spacer sm:hidden'></div>
      <MainLogo handlePage={handlePage} />
      <DesktopNav pageText={pageText} currPage={currPage} handlePage={handlePage} />
      <MobileNav pageText={pageText} currPage={currPage} handlePage={handlePage}/>
    </header>
  );
}

export default Header
