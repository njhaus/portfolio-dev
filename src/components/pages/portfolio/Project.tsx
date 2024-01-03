import Pill from "../../parts/Pill";
import { textColorMap } from "../../../data/portfolioData";

interface iProject {
  title: string;
  githubLink: string;
  liveLink: string;
  img: string;
  desc: string;
  pills: (keyof typeof textColorMap)[];
}

const Project = ({title,
    githubLink,
    liveLink,
    img,
    desc,
  pills}: iProject) => {
  return (
    <div className="project-container">
      <img src={img}></img>
      <h3>{title}</h3>
      <div className="pills-container">
        {pills.map((pill, i) => (
          <Pill
            key={i}
            text={pill}
          ></Pill>
        ))}
      </div>
      <p>{desc}</p>
      <div>
        <a href={githubLink}>
          <button className="btn project-btn">Github Repo</button>
        </a>
        <a href={liveLink}>
          <button className="btn project-btn">Live Site</button>
        </a>
      </div>
    </div>
  );
}

export default Project
