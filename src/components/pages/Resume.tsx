

const Resume = () => {
  return (
    <div className="resume-container page">
      <h1>Résumé</h1>
      <object
        className="resume"
        type="application/pdf"
        data="/public/resume/CS50_certificate.pdf"
      ></object>
      <p>
        PDF not loading?{" "}
        <a href="https://docs.google.com/document/d/1ki_s5PHffWn5JoFmkV8bipIxkCNvNERh/" target="_blank">
          Click here
        </a>{" "}
        to open the file in another tab.
      </p>
    </div>
  );
}

export default Resume
