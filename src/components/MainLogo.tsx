interface MainLogo {
  handlePage: (page: number) => void
}

const MainLogo = ({handlePage}: MainLogo) => {
    return (
    <div className="main-logo flex-col align-middle mx-10 cursor-pointer" onClick={() => handlePage(0)}>
        <h2 className='font-heading text-5xl font-extralight'>NH</h2>
        <img className='w-20' src="/logo-decoration.png"/>
      </div>
    );
}

export default MainLogo
