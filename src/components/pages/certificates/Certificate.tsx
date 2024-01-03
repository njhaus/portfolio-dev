interface iCertificate {
    title: string;
    school: string;
  imgLink: string;
  courseLink: string;
  img: string;
  desc: string;
}

const Certificate = ({ title, imgLink, courseLink, img, desc }: iCertificate) => {
  return (
    <div className="project-container">
      <img src={img}></img>
      <h3>{title}</h3>
      <div>
        <a href={imgLink} target="_blank">
          <button className="btn project-btn">View Certificate</button>
        </a>
        <a href={courseLink} target="_blank">
          <button className="btn project-btn">View Course</button>
        </a>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Certificate;
