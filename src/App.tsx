import { useState } from 'react';

import Header from './pages/header/Header'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'

import { pageText } from './data/pageData';

import './App.css'
import './styles/custom.css'
import Contact from './components/Contact';


function App() {

  const [currPage, setCurrPage] = useState(0);
  const [welcomeScroll, setWelcomeScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false)

  const handlePage = (page: number) => {
    setCurrPage(page)
  }

  const handleWelcomeScroll = (scroll: number) => {
    if (scroll === -1) {
      // reset
      setPrevScroll(0);
      setWelcomeScroll(0);
    }
    else {
      setPrevScroll(welcomeScroll);
      setWelcomeScroll(scroll);
    }
  }

  const handleDialog = (set: boolean) => {
    setContactDialogOpen(set)
  }

  
  return (
    <div className="flex w-full h-full relative overflow-hidden">
      {contactDialogOpen && (
        <Contact handleDialog={handleDialog} dialogOpen={contactDialogOpen} />
      )}
      <Sidebar
        currPage={currPage}
        pageText={pageText}
        welcomeScroll={welcomeScroll}
        prevScroll={prevScroll}
        handleWelcomeScroll={handleWelcomeScroll}
        handlePage={handlePage}
        handleDialog={handleDialog}
      />
      <div className="flex-col grow h-full w-4/5">
        <Header
          pageText={pageText}
          currPage={currPage}
          handlePage={handlePage}
        />
        <Main
          page={currPage}
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
          handleWelcomeScroll={handleWelcomeScroll}
          handlePage={handlePage}
          handleDialog={handleDialog}
        />
      </div>
      <footer className="h-10"></footer>
    </div>
  );
}

export default App;
