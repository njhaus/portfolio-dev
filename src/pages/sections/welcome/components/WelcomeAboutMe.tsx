import { mainBtn } from "../../../../styles/classes";

import Divider from "../../../../components/Divider";

const WelcomeAboutMe = ({
  handlePage, page = 0
}: {
    handlePage: (page: number) => void;
    page?: number
}) => {
  return (
    <>
      <Divider />
      <h2 className="text-5xl font-medium w-full text-right max-w-2xl mt-8 ">
        Thank you for visiting!
      </h2>
      <p className="mx-8 max-w-2xl">
        I'm excited to work with you. Click below to learn more about me and
        what I have to offer your team.
      </p>
      <button className={`${mainBtn}`} onClick={() => handlePage(page)}>About Me</button>
    </>
  );
};

export default WelcomeAboutMe
