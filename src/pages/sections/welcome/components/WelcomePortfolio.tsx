import { mainBtn } from "../../../../styles/classes";

import Divider from "../../../../components/Divider";

const WelcomePortfolio = ({
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
  
  
  const animateLeft =
    welcomeScroll < page
      ? "opacity-0"
      : welcomeScroll === page && welcomeScroll >= prevScroll
      ? "opacity-0 main-animate-left"
      : "";

  const animateRight =
    welcomeScroll < page
      ? "opacity-0"
      : welcomeScroll === page && welcomeScroll >= prevScroll
      ? "opacity-0 main-animate-right"
      : "";
  
  return (
    <>
      <Divider />
      <h2 className={`text-5xl font-medium w-full text-right max-w-2xl mt-8 ${animateRight}`}>
        Work you can trust.
      </h2>
      <p className={`mx-12 max-w-2xl ${animateLeft}`}>
        The detail and detication I put into my work shows in the final product.
        I strive to produce comprehensive, easy-to-maintain applications that
        deliver an excellent user experience.
      </p>
      <button className={`${mainBtn}`} onClick={() => handlePage(page)}>
        View Portfolio
      </button>
    </>
  );
};

export default WelcomePortfolio
