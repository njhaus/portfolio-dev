import { useState } from 'react';

import Header from './pages/header/Header'
import Sidebar from './pages/sidebar/Sidebar'
import Main from './pages/main/Main'

import { pageText } from './data/pageData';

import './App.css'
import './styles/custom.css'
import Contact from './components/Contact';
import DeviceDetector from 'device-detector-js';


function App() {

  const [currPage, setCurrPage] = useState(0);
  const [welcomeScroll, setWelcomeScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  const [contactDialogOpen, setContactDialogOpen] = useState(false)


  const deviceDetector = new DeviceDetector();
  const device = deviceDetector.parse(navigator.userAgent);
  

  const handlePage = (page: number) => {
    setCurrPage(page)
  }

  const handleWelcomeScroll = (scroll: number) => {
    if (device && device.device?.type !== "desktop") {
      console.log("mobile");
      return;
    }
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
      <aside className="relative w-5 bg-slate-200 h-full max-w-64 me-10 z-30 md:w-1/5">
        <Sidebar
          currPage={currPage}
          pageText={pageText}
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
          handleWelcomeScroll={handleWelcomeScroll}
          handlePage={handlePage}
          handleDialog={handleDialog}
        />
      </aside>
      <div className="main-container flex flex-col h-full w-main-container  md:w-4/5">
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
    </div>
  );
}

export default App;
