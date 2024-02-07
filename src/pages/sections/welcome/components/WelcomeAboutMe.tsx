import { mainBtn } from "../../../../styles/classes";

import Divider from "../../../../components/Divider";
import DeviceDetector from "device-detector-js";

const WelcomeAboutMe = ({
  handlePage,
  welcomeScroll,
  prevScroll,
  page = 0
}: {
    handlePage: (page: number) => void;
    welcomeScroll: number;
    prevScroll: number;
    page?: number
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
      <h2 className={`text-5xl font-medium w-full text-right max-w-2xl mt-8 ${animateRight}`}>
        Thank you for visiting!
      </h2>
      <p className={`mx-8 max-w-2xl ${animateLeft}`}>
        I'm excited to work with you. Click below to learn more about me and
        what I have to offer your team.
      </p>
      <button className={`${mainBtn}`} onClick={() => handlePage(page)}>About Me</button>
    </>
  );
};

export default WelcomeAboutMe
