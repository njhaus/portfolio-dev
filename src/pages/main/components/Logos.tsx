
const logoSize = 'text-3xl'

const LogoList = [
     <i className={`${logoSize} devicon-typescript-plain`}></i>,
      <i className={`${logoSize} devicon-react-original`}></i>,
      <i className={`${logoSize} devicon-nextjs-original`}></i>,
      <i className={`${logoSize} devicon-nodejs-plain`}></i>,
      <i className={`${logoSize} devicon-javascript-plain`}></i>,
      <i className={`${logoSize} devicon-sqlite-plain`}></i>,
      <i className={`${logoSize} devicon-mongodb-plain`}></i>,
      <i className={`${logoSize} devicon-git-plain`}></i>,
      <i className={`${logoSize} devicon-github-original`}></i>,
      <i className={`${logoSize} devicon-express-original`}></i>,
      <i className={`${logoSize} devicon-python-plain`}></i>,
      <i className={`${logoSize} devicon-materialui-plain`}></i>,
      <i className={`${logoSize} devicon-tailwindcss-original-wordmark`}></i>,
      <i className={`${logoSize} devicon-bootstrap-plain`}></i>,
      <i className={`${logoSize} devicon-css3-plain`}></i>,
      <i className={`${logoSize} devicon-html5-plain`}></i>,
    
];

const Logos = () => {
  return (
    <div className="grid grid-cols-2 w-20 gap-3 h-5/6 mt-8">
      {LogoList.map((logo, i) => (
        <div key={i} className='text-slate-400'>{logo}</div>
      ))}
    </div>
  );
}

export default Logos
