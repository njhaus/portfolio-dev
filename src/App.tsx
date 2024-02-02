import { useState } from 'react';

import Header from './pages/header/Header'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'

import { pageText } from './data/pageData';

import './App.css'


function App() {

  const [currPage, setCurrPage] = useState(0);
  const [welcomeScroll, setWelcomeScroll] = useState(0)

  const handlePage = (page: number) => {
    setCurrPage(page)
  }

  const handleWelcomeScroll = (scroll: number) => {
    setWelcomeScroll(scroll)
  }

  
  return (
    <div className="flex w-full h-full">
      <Sidebar
        pageText={pageText}
        welcomeScroll={welcomeScroll}
        handleWelcomeScroll={handleWelcomeScroll}
      />
      <div className="flex-col grow h-full w-4/5">
        <Header
          pageText={pageText}
          currPage={currPage}
          handlePage={handlePage}
        />
        <Main page={currPage} welcomeScroll={welcomeScroll} />
      </div>
      <footer className='h-10'></footer>
    </div>
  );
}

export default App;
