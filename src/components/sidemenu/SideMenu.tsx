import { pageData } from "../../data/pageData";
import MenuButton from "./MenuButton";


interface iSideMenu {
  handlePage: (ind: number) => void;
}

const SideMenu = ({ handlePage}: iSideMenu) => {

  const linkData = pageData.slice(1)

  return (
    <section className="side-menu-section">
      {linkData.map((page, i) => (
        <MenuButton
          key={i}
          text={page.pageText}
          handlePage={handlePage}
          i={i + 1}
        ></MenuButton>
        ))}
    </section>
  );
}

export default SideMenu
