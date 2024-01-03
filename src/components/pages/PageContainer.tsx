import { iPageData } from "../../App";

interface iPageContainer {
  currPage: number;
  pageData: iPageData[];
}

const PageContainer = ({ currPage, pageData }: iPageContainer) => {

  return (
    <section className="page-section">
      {pageData[currPage].component}
      <div className="page-overlay"></div>
    </section>
  );
}

export default PageContainer
