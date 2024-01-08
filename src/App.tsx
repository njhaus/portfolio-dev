
import Header from './components/header/Header';
import SideMenu from './components/sidemenu/SideMenu';
import PageContainer from './components/pages/PageContainer';
import Footer from './components/Footer';
import Portfolio from './components/pages/Portfolio';
import Welcome from './components/pages/Welcome';
import AboutMe from './components/pages/AboutMe';
import Resume from './components/pages/Resume';
import Certificates from './components/pages/Certificates';

// Styles
// Root and body
import './App.css'
import './styles/utility_styles.css'
import './styles/animations.css'
// Header, contact me dialog, footer, main img
import './styles/header.css'
import "./styles/side-menu.css";
// main section, pages container
import './styles/pages/pages.css'
// Individual pages
import "./styles/pages/welcome.css";
import "./styles/pages/portfolio-certificate.css";
import "./styles/pages/resume-about.css";
// Media Queries
import "./styles/media-queries.css";


import { useState } from 'react';
import Contact from './components/parts/Contact';

export interface iPageData {
  pageText: string;
  component: JSX.Element;
}

function App() {

  const [currPage, setCurrPage] = useState(0);
  const [contactDialog, setContactDialog] = useState(false);

  const handlePage = (i: number) => {
    setCurrPage(i)
  }

  const handleDialog = (set: boolean) => {
    setContactDialog(set)
  }

const pageData = [
    {
      pageText: "Home",
      component: <Welcome
        handlePage={handlePage}
        handleDialog={handleDialog}
      ></Welcome>,
    },
    {
      pageText: "Portfolio",
      component: <Portfolio></Portfolio>,
    },
    {
      pageText: "About Me",
      component: <AboutMe></AboutMe>,
    },
    {
      pageText: "Résumé",
      component: <Resume></Resume>,
    },
    {
      pageText: "Certificates",
      component: <Certificates></Certificates>,
    },
];

  return (
    <>
      <Header
        currPage={currPage}
        handlePage={handlePage}
        handleDialog={handleDialog}
      />
      <Contact handleDialog={handleDialog} dialogOpen={contactDialog} />
      <main>
        <SideMenu handlePage={handlePage} />
        <PageContainer currPage={currPage} pageData={pageData} />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
