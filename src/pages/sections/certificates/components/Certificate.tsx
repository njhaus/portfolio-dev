import {mainBtn} from '../../../../styles/classes'

interface iCertificate {
  title: string;
  school: string;
  imgLink: string;
  courseLink: string;
  img: string;
  desc: string;
}

const Certificate = ({
  title,
  courseLink,
  img,
  desc,
}: iCertificate) => {
  return (
    <div className="project-container w-64 flex flex-col justify-center align-top">
      <div className="flex-grow">
        <img className="project-img" src={img}></img>
        <h3 className="project-heading">{title}</h3>
        <div>
          <a href={img} target="_blank">
            <button className={`me-3 mb-3 ${mainBtn}`}>View Certificate</button>
          </a>
          <a href={courseLink} target="_blank">
            <button className={`me-3 mb-3 ${mainBtn}`}>View Course</button>
          </a>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Certificate;
