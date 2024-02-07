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
  prevScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
  handlePage: (page: number) => void;
  handleDialog: (set: boolean) => void;
}

const Main = ({ page, welcomeScroll, prevScroll, handleWelcomeScroll, handlePage, handleDialog }: Main) => {

  const pageData = [
    {
      pageText: "Home",
      component: (
        <Welcome
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
          handleWelcomeScroll={handleWelcomeScroll}
          handlePage={handlePage}
          handleDialog={handleDialog}
        ></Welcome>
      ),
    },
    {
      pageText: "Résumé",
      component: <Resume handlePage={handlePage}></Resume>,
    },
    {
      pageText: "Portfolio",
      component: <Portfolio handlePage={handlePage}></Portfolio>,
    },
    {
      pageText: "Certificates",
      component: <Certificates handlePage={handlePage}></Certificates>,
    },
    {
      pageText: "About Me",
      component: <AboutMe handlePage={handlePage}></AboutMe>,
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null)
  const welcomeRef = useRef<HTMLDivElement | null>(null);


  const handleManualScroll = () => {
    if (welcomeRef && welcomeRef.current) {
      const rect = welcomeRef.current.getBoundingClientRect();
      const scrollPosition = Math.round(Math.abs(((rect.y + 72) / 640))) ;
      console.log(scrollPosition)
      if (scrollPosition !== welcomeScroll && scrollPosition < pageData.length) {
        handleWelcomeScroll(scrollPosition);
      }
    }
  }

  useEffect(() => {
    if (scrollRef && scrollRef?.current) scrollRef?.current.scrollTo(0, 0);
  }, [page]);

  return (
    <main className={`flex h-less w-full ps-10`}>
      <section
        ref={scrollRef}
        className="flex-grow max-w-1/2 overflow-y-scroll "
        onWheel={() => handleManualScroll()}
        onTouchStart={() => handleManualScroll()}
        onTouchEnd={() => handleManualScroll()}
      >
        <div ref={welcomeRef} className="h-full pb-5 min-h-[40rem]">
          {pageData[page].component}
        </div>
      </section>
      <Logos direction={"vertical"} />
    </main>
  );
};

export default Main;
