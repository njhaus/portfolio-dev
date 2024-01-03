import { portfolioData } from "../../data/portfolioData"
import Project from "./portfolio/Project"

const Portfolio = () => {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <div className="portfolio-container">
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
    </div>
  );
}

export default Portfolio
