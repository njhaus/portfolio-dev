const Resume = ({ handlePage }: {handlePage: (page: number) => void}) => {
  return (
    <div className="w-4/5 h-more mt-5 mx-auto h-fit mb-72">
      <h1 className="section-heading">Resume</h1>
      <div className="w-full relative">
        <a href="/resume-24-img.png" target="_blank">
          <img
            className="relative pt-8 mx-auto"
            id="resume"
            src="/resume-24-img.png"
          ></img>
        </a>
        <a
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-white opacity-50 rounded-md cursor-pointer text-blue-800 active:text-pink-800 visited:text-pink-800"
          href="/resume-24.pdf"
          download="nick.haus.resume.pdf"
        >
          Download PDF
        </a>
        <p className="absolute top-8 left-1/2 -translate-x-1/2 w-40 bg-white opacity-50 rounded-md pointer-events-none cursor-pointer">
          Click to enlarge &#128269;
        </p>
      </div>
      <button className="main-btn mt-8" onClick={() => handlePage(0)}>
        Return Home
      </button>
    </div>
  );
}

export default Resume
