import { mainBtn } from "../../../../styles/classes";
import Divider from "../../../../components/Divider";

import DeviceDetector from "device-detector-js";

const WelcomeResume = ({
  handlePage,
  welcomeScroll,
  prevScroll,
  page = 0,
}: {
    handlePage: (page: number) => void;
    welcomeScroll: number;
    prevScroll: number;
  page?: number;
  }) => {
  
  const deviceDetector = new DeviceDetector();

  const mobileOverride =
    deviceDetector.parse(navigator.userAgent).device?.type !== "desktop"
      ? true
      : false;
  
  const animateLeft =
    welcomeScroll === page - 1 && !mobileOverride
      ? "opacity-0"
      : welcomeScroll === page && welcomeScroll >= prevScroll && !mobileOverride
      ? "opacity-0 main-animate-left"
      : "opacity-1";
       
  const animateRight =
    welcomeScroll === page - 1 && !mobileOverride
      ? "opacity-0"
      : welcomeScroll === page && welcomeScroll >= prevScroll && !mobileOverride
      ? "opacity-0 main-animate-right"
      : "opacity-1";
  
  
  return (
    <>
      <Divider />
      <h2
        className={`sm:hidden text-5xl font-medium w-full text-left max-w-2xl mt-8 ${animateLeft}`}
      >
        Proven professional-ism.
      </h2>
      <h2
        className={`hidden sm:block text-5xl font-medium w-full text-left max-w-2xl mt-8 ${animateLeft}`}
      >
        Proven professionalism.
      </h2>
      <p className={`mx-8 max-w-2xl ${animateRight}`}>
        I've worked tirelessly to build the technical skills necessary to succed
        in a modern, fast-pased environment. I have experience in MERN stack
        technologies, Typescript, Next.js, Javascript, HTML, CSS, Python, SQL
        and no-SQL databases, and a number of front-end libraries. Check out my
        resume to learn more about my professional experience.
      </p>
      <button className={`${mainBtn}`} onClick={() => handlePage(page)}>
        View Resume
      </button>
    </>
  );
};

export default WelcomeResume
