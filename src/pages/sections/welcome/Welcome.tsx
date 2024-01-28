import React from "react";

import Home from './components/Home'
import WelcomeResume from "./components/WelcomeResume";
import WelcomePortfolio from "./components/WelcomePortfolio";
import WelcomeCertificates from "./components/WelcomeCertificates";
import WelcomeAboutMe from "./components/WelcomeAboutMe";

const Welcome = () => {
  return (
    <section className="h-5/6 pb-5 overflow-x-scroll">
      <article className="flex flex-col h-full justify-around items-center">
        <Home />
      </article>
      <article className="flex flex-col h-full justify-around items-center py-10 my-8">
        <WelcomeResume />
      </article>
      <article className="flex flex-col h-full justify-around items-center py-10 my-8">
        <WelcomePortfolio />
      </article>
      <article className="flex flex-col h-full justify-around items-center py-10 my-8">
        <WelcomeCertificates />
      </article>
      <article className="flex flex-col h-full justify-around items-center py-10 my-8">
        <WelcomeAboutMe />
      </article>
    </section>
  );
};

export default Welcome;
