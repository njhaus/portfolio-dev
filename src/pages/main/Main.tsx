import Welcome from "../../pages/sections/welcome/Welcome";
import Portfolio from "../sections/portfolio/Portfolio";
import AboutMe from "../../pages/sections/AboutMe";
import Resume from "../../pages/sections/Resume";
import Certificates from "../sections/certificates/Certificates";

import Logos from "./components/Logos";

interface Main {
  page: number;
  welcomeScroll: number;
}

const Main = ({ page, welcomeScroll }: Main) => {
  const pageData = [
    {
      pageText: "Home",
      component: <Welcome welcomeScroll={welcomeScroll}></Welcome>,
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

  return (
    <main className={`flex m-3 p-2 h-full`}>
      <section className="flex-grow max-w-1/2 overflow-y-scroll">
        {pageData[page].component}
      </section>
      <Logos />
    </main>
  );
};

export default Main;
