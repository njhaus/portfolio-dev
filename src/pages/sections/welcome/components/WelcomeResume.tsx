import { mainBtn } from "../../../../styles/classes";
import Divider from "../../../../components/Divider";

const WelcomeResume = () => {
  return (
    <>
      <Divider />
      <h2 className="text-5xl font-medium w-full text-left max-w-2xl mt-8 ">
        Proven professionalism.
      </h2>
      <p className="mx-8 max-w-2xl">
        I've worked tirelessly to build the technical skills necessary to succed
        in a modern, fast-pased environment. I have experience in MERN stack
        technologies, Typescript, Next.js, Javascript, HTML, CSS, Python, SQL
        and no-SQL databases, and a number of front-end libraries. Check out my
        resume to learn more about my professional experience.
      </p>
      <button className={`${mainBtn}`}>View Resume</button>
    </>
  );
}

export default WelcomeResume
