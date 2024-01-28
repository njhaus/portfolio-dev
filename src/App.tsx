import { useState } from 'react';

import Header from './pages/header/Header'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'

import { pageData } from './data/pageData';

import './App.css'


function App() {

  const [currPage, setCurrPage] = useState(0);

  const handlePage = (page: number) => {
    setCurrPage(page)
  }

  const pageText = pageData.map((page) => page.pageText);
  
  return (
    <div className='flex w-full h-full'>
      <Sidebar
        pageText={pageText}
        currPage={currPage}
        handlePage={handlePage}
      />
      <div className="flex-col grow h-full">
        <Header
          pageText={pageText}
          currPage={currPage}
          handlePage={handlePage}
        />
        <Main page={pageData[currPage]} />
      </div>
    </div>
  );
}

export default App;
