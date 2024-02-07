import { useEffect, useRef } from "react";

import Welcome from "../../pages/sections/welcome/Welcome";
import Portfolio from "../sections/portfolio/Portfolio";
import AboutMe from "../../pages/sections/AboutMe";
import Resume from "../../pages/sections/Resume";
import Certificates from "../sections/certificates/Certificates";

import Logos from "./components/Logos";

import DeviceDetector from "device-detector-js";

interface Main {
  page: number;
  welcomeScroll: number;
  prevScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
  handlePage: (page: number) => void;
  handleDialog: (set: boolean) => void;
}

const Main = ({ page, welcomeScroll, prevScroll, handleWelcomeScroll, handlePage, handleDialog }: Main) => {

  const deviceDetector = new DeviceDetector();
  const device = deviceDetector.parse(navigator.userAgent);
  

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
    if (device && device.device?.type !== 'desktop') {
      console.log('mobile')
      return
    }
    else if (welcomeRef && welcomeRef.current) {
      const rect = welcomeRef.current.getBoundingClientRect();
      const scrollPosition = Math.round(Math.abs(((rect.y + 72) / 640))) ;
      if (scrollPosition !== welcomeScroll && scrollPosition < pageData.length) {
        handleWelcomeScroll(scrollPosition);
      }
    }
  }

  useEffect(() => {
    // if (device && device.device?.type !== "desktop") {
    //   console.log("mobile");
    //   return;
    // }
    // else
      if (welcomeRef && welcomeRef?.current)
      {
        welcomeRef?.current.scrollTo(0, 0);
      }
  }, [page]);

  return (
    <main className={`flex h-less w-full px-3`}>
      <section
        ref={scrollRef}
        className="flex-grow max-w-1/2 overflow-y-scroll "
        onWheel={() => handleManualScroll()}
      >
        <div ref={welcomeRef} className="pb-5 h-[40rem]">
          {pageData[page].component}
        </div>
      </section>
      <Logos direction={"vertical"} />
    </main>
  );
};

export default Main;
