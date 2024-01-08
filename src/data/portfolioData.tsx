// import { textColorMap } from "../components/parts/Pill";
export const textColorMap = {
  Javascript: "yellow pill",
  Typescript: "blue pill",
  HTML: "red pill",
  EJS: "red pill",
  CSS: "purple pill",
  Node: "gray pill",
  Express: "darkgray pill",
  MongoDB: "teal pill",
  SQLite: "teal pill",
  React: "lightteal pill",
  MaterialUI: "lightpurple pill",
  ChakraUI: "lightpurple pill",
  Bootstrap: "lightpurple pill",
};


class PortfolioProject {
  title: string;
  githubLink: string;
  liveLink: string;
  img: string;
  desc: string;
  pills: (keyof typeof textColorMap)[];

  constructor(
    title: string,
    githubLink: string,
    liveLink: string,
    img: string,
    desc: string,
    pills: (keyof typeof textColorMap)[],
  ) {
    this.title = title;
    this.githubLink = githubLink;
    this.liveLink = liveLink;
    this.img = img;
    this.desc = desc;
    this.pills = pills;

     const validPills = pills.filter((pill) =>
       Object.keys(textColorMap).includes(pill)
     );
     this.pills = validPills;
  }
}


const yelpcamp = new PortfolioProject(
  "YelpCamp",
  "https://github.com/njhaus/yelpcamp",
  "https://yelpcamp-production-c045.up.railway.app/home/",
  "/yelpcamp-img.png",
  "A full-stack website created with Node, Express, MongoDB and EJS.",
  ["EJS", "Node", "MongoDB", "Express", "Bootstrap"]
);
const christmasListMaker = new PortfolioProject(
  "Christmas List Maker (Front End)",
  "https://github.com/njhaus/christmas-list-maker",
  "https://christmas-list-maker-production.up.railway.app/",
  "/christmas-list-maker-img.png",
  "The front end of a full-stack web application created with React, Typescript, and Material UI",
  ["React", "Typescript", "MaterialUI", "Node", "Express", "SQLite"]
);
// const christmasListMakerApi = new PortfolioProject(
//   "Christmas List Maker (Back End)",
//   "https://github.com/njhaus/christmas-list-maker-api",
//   "https://christmas-list-maker-production.up.railway.app/",
//     '/christmas-list-maker-api-img.png',
//   'The back end of a full-stack web application created with Node, Express, and SQLite',
//   ['Node', "Express", 'SQLite']
// );
const findMeTrees = new PortfolioProject(
  "Find Me Trees",
  "https://github.com/njhaus/find-me-trees2",
  "https://github.com/njhaus/find-me-trees2",
    '/temp-img.png',
  "(Under construction) A MERN stack web application including Typescript and Chakra UI.",
['React', 'Typescript', 'MongoDB', "Express", "Node", "ChakraUI"]
);
const hotn = new PortfolioProject(
  "Hosts of the Night Companion App",
  "https://github.com/njhaus/HOTN",
  "https://njhaus.github.io/HOTN/",
  '/hotn-img.png',
  "A board game companion app built with vanilla Javascript, HTML, and CSS.",
  ['Javascript', 'HTML', "CSS"]
);
const colorMaze = new PortfolioProject(
  "Colors Maze",
  "https://github.com/njhaus/color-maze",
  "https://njhaus.github.io/color-maze/",
  '/colors-maze-img.png',
  "An online game built with Javascript, Bootstrap, CSS and HTML.",
  ["Javascript", "Bootstrap", "CSS", "HTML"]
);
const homepage = new PortfolioProject(
  "Homepage",
  "https://github.com/njhaus/portfolio-dev",
  "https://portfolio-dev-production.up.railway.app/",
  "/homepage-img.png",
  "A personal homepage built with React, Typescript, and custom CSS (It's this site.)",
  ["React", "Typescript", "CSS"]
);
const emWaves = new PortfolioProject(
  "EM Waves",
  "https://github.com/njhaus/em-waves",
  "https://njhaus.github.io/em-waves/",
  '/em-waves-img.png',
  "A project landing page built with HTML, Bootstrap, and CSS",
  ['Bootstrap', 'HTML', "CSS"]
);


export const portfolioData = [yelpcamp, christmasListMaker, findMeTrees, hotn, colorMaze, homepage, emWaves]