import { mainBtn } from "../../../../styles/classes";

import Divider from "../../../../components/Divider";
import DeviceDetector from "device-detector-js";

const WelcomeCertificates = ({
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
      <h2 className={`text-5xl font-medium w-full text-left max-w-2xl mt-8 ${animateLeft}`}>
        Lifelong learning and dedication.
      </h2>
      <p className={`mx-8 max-w-2xl ${animateRight}`}>
        Beyond having a bachelors degree, I have built the knowledge and skills
        to be an asset to any developer team through numerous courses and
        diligent self-study. Click below to view my certificates.
      </p>
      <button className={`${mainBtn}`} onClick={() => handlePage(page)}>View Certificates</button>
    </>
  );
};

export default WelcomeCertificates
