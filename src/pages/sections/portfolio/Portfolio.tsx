
import { portfolioData } from "../../../data/portfolioData";
import Project from "../portfolio/components/Project";

const Portfolio = ({ handlePage }: { handlePage: (page: number) => void }) => {
  return (
    <div className="w-full px-8 py-6 h-fit mb-24">
      <h1 className="section-heading">My Projects</h1>
      <div
        className="portfolio-container flex flex-wrap gap-16 justify-evenly my-12"
        id="portfolio-container"
      >
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
      <button className="main-btn" onClick={() => handlePage(0)}>
        Return Home
      </button>
    </div>
  );
};

export default Portfolio;
