import ResumePDF from "../../../public/resume-24.pdf";

const Resume = () => {
  return (
    <div className="resume-container page">
      <h1>Résumé</h1>
      <div className="resume-img-container">
        <a href="/resume-24-img.png" target="_blank">
          <img className="resume" id="resume" src="/resume-24-img.png"></img>
        </a>
        <p className="click-through img-click">Click to enlarge &#128269;</p>
      </div>
      <a href="/resume-24.pdf" download="nick.haus.resume.pdf">
        Download PDF
      </a>
    </div>
  );
};

export default Resume;
