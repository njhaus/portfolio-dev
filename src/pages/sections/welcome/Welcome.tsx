import { useEffect, useRef } from "react";

import Home from './components/Home'
import WelcomeResume from "./components/WelcomeResume";
import WelcomePortfolio from "./components/WelcomePortfolio";
import WelcomeCertificates from "./components/WelcomeCertificates";
import WelcomeAboutMe from "./components/WelcomeAboutMe";

interface Welcome {
  welcomeScroll: number;
}

const Welcome = ({ welcomeScroll }: Welcome) => {
  
  const HomeRef = useRef(null)
  const ResumeRef = useRef(null);
  const PortfolioRef = useRef(null);
  const CertificatesRef = useRef(null);
  const AboutMeRef = useRef(null);

  const refsArray: React.MutableRefObject<HTMLElement | null>[] = [
    HomeRef,
    ResumeRef,
    PortfolioRef,
    CertificatesRef,
    AboutMeRef,
  ];

  useEffect(() => {
    const target = refsArray[welcomeScroll]?.current;
    if (target) {
      target.scrollIntoView({behavior: 'smooth'})
    }
  }, [welcomeScroll])

  return (
    <div className="h-5/6 pb-5">
      <article
        className="flex flex-col h-full justify-around items-center"
        ref={HomeRef}
      >
        <Home />
      </article>
      <article
        className="flex flex-col h-full justify-around items-center py-10 my-8"
        ref={ResumeRef}
      >
        <WelcomeResume/>
      </article>
      <article
        className="flex flex-col h-full justify-around items-center py-10 my-8"
        ref={PortfolioRef}
      >
        <WelcomePortfolio/>
      </article>
      <article
        className="flex flex-col h-full justify-around items-center py-10 my-8"
        ref={CertificatesRef}
      >
        <WelcomeCertificates/>
      </article>
      <article
        className="flex flex-col h-full justify-around items-center py-10 my-8"
        ref={AboutMeRef}
      >
        <WelcomeAboutMe/>
      </article>
    </div>
  );
};

export default Welcome;
