import React, { useEffect, useRef } from "react";

import Home from './components/Home'
import WelcomeResume from "./components/WelcomeResume";
import WelcomePortfolio from "./components/WelcomePortfolio";
import WelcomeCertificates from "./components/WelcomeCertificates";
import WelcomeAboutMe from "./components/WelcomeAboutMe";
import Logos from "../../main/components/Logos";
import DeviceDetector from "device-detector-js";

interface Welcome {
  welcomeScroll: number;
  prevScroll: number;
  handleWelcomeScroll: (scroll: number) => void;
  handlePage: (page: number) => void;
  handleDialog: (set: boolean) => void;
}

const Welcome = ({ welcomeScroll, prevScroll, handleWelcomeScroll, handlePage, handleDialog }: Welcome) => {

  const deviceDetector = new DeviceDetector();
  const device = deviceDetector.parse(navigator.userAgent);
  
  
  const homeRef = useRef<HTMLDivElement | null>(null)
  const ResumeRef = useRef(null);
  const PortfolioRef = useRef(null);
  const CertificatesRef = useRef(null);
  const AboutMeRef = useRef(null);

  const refsArray: React.MutableRefObject<HTMLElement | null>[] = [
    homeRef,
    ResumeRef,
    PortfolioRef,
    CertificatesRef,
    AboutMeRef,
  ];

  const welcomeArticles = [
    {
      ref: ResumeRef,
      component: (
        <WelcomeResume
          handlePage={handlePage}
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
        />
      ),
    },
    {
      ref: PortfolioRef,
      component: (
        <WelcomePortfolio
          handlePage={handlePage}
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
        />
      ),
    },
    {
      ref: CertificatesRef,
      component: (
        <WelcomeCertificates
          handlePage={handlePage}
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
        />
      ),
    },
    {
      ref: AboutMeRef,
      component: (
        <WelcomeAboutMe
          handlePage={handlePage}
          welcomeScroll={welcomeScroll}
          prevScroll={prevScroll}
        />
      ),
    },
  ];

  useEffect(() => {
    if (device && device.device?.type !== "desktop") {
      console.log("mobile");
      return;
    }
    else {
      const target = refsArray[welcomeScroll]?.current;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [welcomeScroll])


  useEffect(() => {
    if (device && device.device?.type !== "desktop") {
      console.log("mobile");
      return;
    }
    else {
      handleWelcomeScroll(-1);
    }
  }, []);

  useEffect(() => {
     if (device && device.device?.type !== "desktop") {
       console.log("mobile");
       return;
     }
     else {
      window.scrollTo(0, 0);  
    }
  }, [])

  return (
    <div className="h-full pb-5">
      <article
        className="flex flex-col h-full justify-around items-center"
        ref={homeRef}
      >
        <Home handleDialog={handleDialog} />
      </article>
      {welcomeArticles.map((article, i) => (
        <article
          key={i}
          className="flex flex-col h-full justify-around items-center py-10 my-8 min-h-[40rem]"
          ref={article.ref}
        >
          {React.cloneElement(article.component, { page: i + 1 })}
        </article>
      ))}
      <Logos direction={"horizontal"} />
    </div>
  );
};

export default Welcome;
