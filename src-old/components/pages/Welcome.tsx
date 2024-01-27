import { iPageData } from "../../../src/App";

interface iWelcome {
  handlePage: (ind: number) => void;
  handleDialog: (set: boolean) => void;
  pageData: iPageData[];
}

const Welcome = ({ handlePage, handleDialog, pageData }: iWelcome) => {
  return (
    <div className="page welcome-page">
      <h1>Nick Haus</h1>
      <p>
        I'm a full-stack web developer with a passion for creating beautiful,
        dynamic, and accessible web applications. I have a robust knowledge of
        many modern web development tools and frameworks and am a proven team
        player as well as a lifelong learner with excellent customer service,
        teamwork, and organization skills.
      </p>
      <div className="btn-grid">
        {pageData.slice(1).map((page) => (
          <div className={`btn-brush view-portfolio-btn ${page.color}`}>
            <button className="btn" onClick={() => handlePage(1)}>
              {page.pageText}
            </button>
          </div>
        ))}
        <div className="btn-brush red">
          <button className="btn" onClick={() => handleDialog(true)}>
            Hire Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
