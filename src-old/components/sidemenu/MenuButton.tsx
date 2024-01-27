
interface iMenuButton {
    text: string;
    handlePage: (ind: number) => void;
    i: number;
}

const MenuButton = ({text, handlePage, i}: iMenuButton) => {
    return (
        <div className="side-menu-container">
            <button className="btn side-menu-btn"
                onClick={() => handlePage(i)}
            >{text}</button>
        </div>
    )
}
export default MenuButton
