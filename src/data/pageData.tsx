import Portfolio from "../components/pages/Portfolio"
import AboutMe from "../components/pages/AboutMe"
import Resume from "../components/pages/Resume"
import Certificates from "../components/pages/Certificates"
// import Welcome from "../components/pages/Welcome"

export const pageData = [
  {
    pageText: "Home",
    // component: <Welcome></Welcome>,
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