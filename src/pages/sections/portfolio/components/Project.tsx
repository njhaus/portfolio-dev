import React from "react";

import Pill from "../../../../components/Pill"
import { textColorMap } from "../../../../data/portfolioData";

interface iProject {
  title: string;
  githubLink: string;
  liveLink: string;
  img: string;
  desc: string;
  pills: (keyof typeof textColorMap)[];
}

const Project = ({
  title,
  githubLink,
  liveLink,
  img,
  desc,
  pills,
}: iProject) => {
  return (
    <div className="w-64 flex flex-col justify-center align-top">
      <div className="flex-grow">
        <img className="project-img" src={img}></img>
        <h3 className="project-heading">{title}</h3>
        <div className="pills-container">
          {pills.map((pill, i) => (
            <Pill key={i} text={pill}></Pill>
          ))}
        </div>
        <p className="my-2">{desc}</p>
      </div>
      <div>
        <a href={githubLink} target="_blank">
          <button className="main-btn bg-slate-100 me-3 hover:main-hover">
            Github Repo
          </button>
        </a>
        <a href={liveLink.match(/github.com/) ? "" : liveLink} target="_blank">
          <button
            className="main-btn bg-slate-100 hover:main-hover"
            disabled={liveLink.match(/github.com/) ? true : false}
          >
            Live Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
