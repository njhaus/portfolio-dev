import { certificates } from "../../../data/certificateData";
import Certificate from "./components/Certificate"


const Certificates = () => {

  return (
    <div className="w-full px-8 py-6 h-fit mb-24">
      <h1 className="section-heading">My Certificates</h1>
      <div
        className="portfolio-container flex flex-wrap gap-16 justify-evenly my-12"
        id="portfolio-container"
      >
        {certificates.map((certificate, i) => (
          <Certificate
            key={i}
            title={certificate.title}
            school={certificate.school}
            img={certificate.img}
            desc={certificate.desc}
            imgLink={certificate.imgLink}
            courseLink={certificate.courseLink}
          ></Certificate>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
