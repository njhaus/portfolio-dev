import { useEffect, useRef } from "react";

import Welcome from "../../pages/sections/welcome/Welcome";
import Portfolio from "../sections/portfolio/Portfolio";
import AboutMe from "../../pages/sections/AboutMe";
import Resume from "../../pages/sections/Resume";
import Certificates from "../sections/certificates/Certificates";

import Logos from "./components/Logos";

interface Main {
  page: number;
  welcomeScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
  handlePage: (page: number) => void;
  handleDialog: (set: boolean) => void;
}

const Main = ({ page, welcomeScroll, handleWelcomeScroll, handlePage, handleDialog }: Main) => {
  const pageData = [
    {
      pageText: "Home",
      component: <Welcome welcomeScroll={welcomeScroll} handleWelcomeScroll={handleWelcomeScroll} handlePage={handlePage} handleDialog={handleDialog}></Welcome>,
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

  const scrollRef = useRef<HTMLDivElement | null>(null)
  const welcomeRef = useRef<HTMLDivElement | null>(null);


  const handleManualScroll = () => {
    if (welcomeRef && welcomeRef.current) {
      const rect = welcomeRef.current.getBoundingClientRect();
      const scrollPosition = Math.abs(Math.floor((rect.y + 50) / window.innerHeight));
      if (scrollPosition !== welcomeScroll) {
        handleWelcomeScroll(scrollPosition);
      }
    }
  }

  useEffect(() => {
    if (scrollRef && scrollRef?.current) scrollRef?.current.scrollTo(0, 0);
  }, [page]);

  return (
    <main className={`flex m-3 p-2 h-less`}>
      <section
        ref={scrollRef}
        className="flex-grow max-w-1/2 overflow-y-scroll"
        onWheel={() => handleManualScroll()}
      >
        <div ref={welcomeRef} className="h-full pb-5 min-h-[32rem]">
          {pageData[page].component}
        </div>
      </section>
      <Logos direction={"vertical"} />
    </main>
  );
};

export default Main;
