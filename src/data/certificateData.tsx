class Certificate {
    title: string;
    school: string;
  imgLink: string;
  courseLink: string;
  img: string;
  desc: string;

  constructor(
      title: string,
      school: string,
    imgLink: string,
    courseLink: string,
    img: string,
    desc: string
  ) {
      this.title = title;
      this.school = school;
    this.imgLink = imgLink;
    this.courseLink = courseLink;
    this.img = img;
    this.desc = desc;
  }
}



const cs50= new Certificate(
    "CS50",
    "Harvard University",
  "",
  "https://pll.harvard.edu/course/cs50-introduction-computer-science",
  "../src/assets/certificates/cs50_cert.png",
  "Introduction to Computer Science at Harvard University. Covered C, Python, SQL, Javascript, CSS, HTML, and programming concepts."
);

const webDevBootcamp = new Certificate(
  "The Web Developer Bootcamp 2023",
  "Colt Steele at Udemy",
  "",
  "https://www.udemy.com/course/the-web-developer-bootcamp/",
  "../src/assets/certificates/udemy_bootcamp_cert.jpeg",
  "Comprehensive web developer course covering front and back end fundamentals including HTML, CSS, Javascript, Node, Express, MongoDB, and much more."
);

const typescript = new Certificate(
  "Ultimate Typescript Course",
  "Code With Mosh",
  "",
  "https://codewithmosh.com/p/the-ultimate-typescript",
  "../src/assets/certificates/typescript_cert.png",
  "Complete Typescript course. Covered the fundamentals of Typescript as well as integration with React and Node/Express."
);

const react = new Certificate(
  "React 18",
  "Code With Mosh",
  "",
  "https://codewithmosh.com/p/ultimate-react-part1",
  "../src/assets/certificates/react_cert.png",
  "React 18 introductory course."
);

const oopProgramming = new Certificate(
  "Ultimate Javasctipt Part 2: Advanced Topics",
  "Code With Mosh",
  "",
  "https://codewithmosh.com/p/object-oriented-programming-in-javascript",
  "../src/assets/certificates/OOP_JS_cert.png",
  "Javascript course focusing on Object-Oriented Programming."
);

const fccJavascript = new Certificate(
  "Javascript Algorithms and Data Structures",
  "Free Code Camp",
  "",
  "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/",
  "../src/assets/certificates/FCC_Javascript.png",
  "Project-based course focusing on using CSS and HTML to create responsive web applications."
);


const fccWebDesign = new Certificate(
  "Responsive Web Design",
  "Free Code Camp",
  "",
  "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  "../src/assets/certificates/FCC_Web_design.png",
  "Project-based course focusing on using CSS and HTML to create responsive web applications."
);


export const certificates = [cs50, webDevBootcamp, typescript, react, oopProgramming, fccJavascript, fccWebDesign]