
interface iWelcome {
  handlePage: (ind: number) => void;
  handleDialog: (set: boolean) => void;
}

const Welcome = ({handlePage, handleDialog}: iWelcome) => {
  return (
    <div className="page welcome-page">
      <h1>Welcome!</h1>
      <h2>I'm Nick Haus, Web Developer</h2>
      <p>
        I'm a full-stack web developer with a passion for creating beautiful,
        dynamic, and accessible web applications.
      </p>
      <div className="btn-stack">
        <div className="btn-brush view-portfolio-btn">
          <button className="btn"
            onClick={() => handlePage(1)}
          >View portfolio</button>
        </div>
        <div className="btn-brush hire-me-btn">
          <button className="btn" onClick={() => handleDialog(true)}>Hire Me!</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome
