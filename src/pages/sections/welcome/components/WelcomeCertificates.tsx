import { mainBtn } from "../../../../styles/classes";

import Divider from "../../../../components/Divider";

const WelcomeCertificates = ({
  handlePage,
  page = 0,
}: {
  handlePage: (page: number) => void;
  page?: number;
}) => {
  return (
    <>
      <Divider />
      <h2 className="text-5xl font-medium w-full text-left max-w-2xl mt-8 ">
        Lifelong learning and dedication.
      </h2>
      <p className="mx-8 max-w-2xl">
        Beyond having a bachelors degree, I have built the knowledge and skills
        to be an asset to any developer team through numerous courses and
        diligent self-study. Click below to view my certificates.
      </p>
      <button className={`${mainBtn}`} onClick={() => handlePage(page)}>View Certificates</button>
    </>
  );
};

export default WelcomeCertificates
