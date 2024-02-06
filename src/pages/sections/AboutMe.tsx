import Divider from '../../components/Divider';

const AboutMe = ({ handlePage }: { handlePage: (page: number) => void }) => {
  return (
    <div className="w-full px-10 py-6 h-fit mb-24">
      <h1 className="section-heading">
        Creating useful, inspiring web applicatons.
      </h1>
      <div className="mx-auto w-fit mb-10">
        <Divider></Divider>
      </div>
      <div>
        <p className="my-6">
          <span className="bold">Welcome! I'm Nick Haus, Web Developer.</span> I
          am a full-stack web developer with a passion for creating beautiful,
          dynamic, and accessible web applications. Along with my technical
          skills, I am also a proven team player and lifelong learner with
          excellent customer service, teamwork, and organization skills. I am
          looking to join a modern, innovative company with a forward-thinking,
          outward focus.
        </p>
        <p className="my-6">
          My web development journey encompasses comprehensive training in front
          and back-end technologies, including, but not limited to, MERN Stack
          technology, SQL, Python, RESTful APIs and CRUD operations, Typescript,
          Javascript, HTML, and CSS. I excel in self-directed learning, and have
          become adept at using available resources such as technical
          documentation to achieve my goals. Currently, I am participating in
          Chingu Cohorts, a program in which teams of developers gain real-world
          experience by developing applications using Agile methodology.
        </p>
        <p className="my-6">
          Having spent 12 years as a professional in the education field, I have
          put into practice the personal skills and competencies necessary to
          thrive in a fast-paced, ever-changing professional environment. As an
          educator, I worked at the forefront of educational technology,
          piloting educational platforms and devices and initiating programs
          that encouraged students to explore the world of tech. In
          transitioning to web development, I hope to continue to work with
          professional teams, produce inspiring and technically-sound creations,
          and influence the world.
        </p>
      </div>
      <button className="main-btn" onClick={() => handlePage(0)}>
        Return Home
      </button>
    </div>
  );
};

export default AboutMe;
