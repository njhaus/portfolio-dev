import ResumePDF from "../../../public/resume-temp-24.pdf";

const Resume = () => {
  return (
    <div className="resume-container page">
      <h1>Résumé</h1>
      <object
        className="resume"
        id="resume"
        type="application/pdf"
        // Data linke this way won't work during dev, but needs to be like this to work in production
        data={ResumePDF}
      ></object>
      <p>
        PDF not loading?{" "}
        <a
          href='/pdf-temp-img.png'
          target="_blank"
        >
          Click here
        </a>{" "}
        to open the file in another tab.
      </p>
    </div>
  );
};

export default Resume;
