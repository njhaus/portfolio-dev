
interface iLogo {
  handlePage: (ind: number) => void;
}

const Logo = ({handlePage}: iLogo) => {
  return (
    <div className="logo-container">
      <img src="/assets/templogopurp.png" className="logo" onClick={() => handlePage(0)}></img>
    </div>
  );
}

export default Logo
