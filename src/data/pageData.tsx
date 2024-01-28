import Welcome from "../pages/sections/welcome/Welcome";
import Portfolio from "../pages/sections/Portfolio";
import AboutMe from "../pages/sections/AboutMe";
import Resume from "../pages/sections/Resume";
import Certificates from "../pages/sections/Certificates";

export interface Page {
  pageText: string;
  component: JSX.Element;
}

export const pageData = [
  {
    pageText: "Home",
    component: <Welcome></Welcome>,
  },
  {
    pageText: "Résumé",
    component: <Resume></Resume>,
  },
  {
    pageText: "Portfolio",
    component: <Portfolio></Portfolio>,
  },
  {
    pageText: "Certificates",
    component: <Certificates></Certificates>,
  },
  {
    pageText: "About Me",
    component: <AboutMe></AboutMe>,
  },
];
