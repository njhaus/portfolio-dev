import { useState } from 'react';

import Header from './pages/header/Header'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'

import { pageData } from './data/pageData';


function App() {

  const [currPage, setCurrPage] = useState(0);

  const handlePage = (page: number) => {
    setCurrPage(page)
  }

  const pageText = pageData.map((page) => page.pageText);
  
  return (
    <>
      <Header pageText={pageText} currPage={currPage} handlePage={handlePage} />
      <div className="main-container">
        <Sidebar
          pageText={pageText}
          currPage={currPage}
          handlePage={handlePage}
        />
        <Main page={pageData[currPage]} />
      </div>
    </>
  );
}

export default App;
