
interface iContactMe {
  handleDialog: (set: boolean) => void;
  handleMenu: () => void;
}

const ContactMe = ({handleDialog, handleMenu }: iContactMe) => {
    return (
      <div className="btn-brush contact-btn">
        <button className="btn" onClick={() => {
          handleDialog(true);
          handleMenu();
        }
        }>Contact Me</button>
      </div>
    );
}

export default ContactMe
