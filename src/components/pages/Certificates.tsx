
import Certificate from "./certificates/Certificate";
import { certificates } from "../../data/certificateData";

const Certificates = () => {
  return (
    <div className="page">
      <h1>My Certificates</h1>
      <p>Certificates earned by completing courses, exams, and projects.</p>
      <div className="portfolio-container">
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
    </div>
  );
}

export default Certificates
