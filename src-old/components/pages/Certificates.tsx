import { useState } from "react";

import Certificate from "./certificates/Certificate";
import { certificates } from "../../../src/data/certificateData";

const Certificates = () => {
  const [scrollTo, setScrollTo] = useState(0);

  const handleScroll = () => {
    const certificateContainer = document.getElementById("portfolio-container");
    const certificates = certificateContainer?.children
      ? Array.from(certificateContainer?.children)
      : [];

    console.log(certificates);
    if (scrollTo + 1 < certificates.length) {
      certificates[scrollTo + 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
      setScrollTo(scrollTo + 1);
    } else {
      certificates[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "end",
      });
      setScrollTo(0);
    }
  };

  return (
    <div className="page">
      <h1>My Certificates</h1>
      <p>Certificates earned by completing courses, exams, and projects.</p>
      <div className="portfolio-container" id="portfolio-container">
        {certificates.map((certificate, i) => (
          <Certificate
            key={i}
            title={certificate.title}
            school={certificate.school}
            imgLink={certificate.imgLink}
            courseLink={certificate.courseLink}
            img={certificate.img}
            desc={certificate.desc}
          ></Certificate>
        ))}
      </div>
      <p className="scroll" id="scroll" onClick={() => handleScroll()}>
        scroll &#9660;
      </p>
    </div>
  );
};

export default Certificates;
