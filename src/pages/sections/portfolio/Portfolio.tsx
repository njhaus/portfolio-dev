import { useState } from "react";

import { portfolioData } from "../../../data/portfolioData";
import Project from "../portfolio/components/Project";

const Portfolio = () => {
  const [scrollTo, setScrollTo] = useState(0);

  const handleScroll = () => {
    const projectContainer = document.getElementById("portfolio-container");
    const projects = projectContainer?.children
      ? Array.from(projectContainer?.children)
      : [];
    console.log(projects[scrollTo + 1]);
    if (scrollTo + 1 < projects.length) {
      console.log("scrolling");
      projects[scrollTo + 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
      setScrollTo(scrollTo + 1);
    } else {
      projects[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
      setScrollTo(0);
    }
  };

  return (
    <div className="w-full px-8 py-6 h-fit mb-24">
      <h1 className="section-heading">My Projects</h1>
      <div className="portfolio-container flex flex-wrap gap-16 justify-evenly my-12" id="portfolio-container">
        {portfolioData.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            img={project.img}
            desc={project.desc}
            pills={project.pills}
          ></Project>
        ))}
      </div>
      {/* <p className="scroll" id="scroll" onClick={() => handleScroll()}>
        scroll &#9660;
      </p> */}
    </div>
  );
};

export default Portfolio;
