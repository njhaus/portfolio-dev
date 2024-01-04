
import { useRef, useState, useEffect } from "react";
import { contactArr } from "../../data/contactLinkData";

interface iContact {
    dialogOpen: boolean;
    handleDialog: (set: boolean) => void;
}

const Contact = ({ handleDialog, dialogOpen }: iContact) => {
    
  const [copyMsg, setCopyMsg] = useState('');
    const dialogRef = useRef<HTMLDivElement>(null);


    const stopCloseDialog = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        if (
            //    @ts-ignore
            // This is the only way i was able to stop the event from propagating -- stop propagation didn't work and useing a ref to match the e.target didn't work.
            // Had to spread the classList beacuse it produces a DOMtokenList and not an array, which means I couldn't use includes() on it until I made it an array
               ![...e.target.classList].includes('dialog-overlay')
           ) {
             // Inside the dialog, do nothing
             return;
           }
        handleDialog(false)
    };
  
  const showCopyMsg = (type: string, text: string) => {
    setCopyMsg(type);
    navigator.clipboard.writeText(text);
  }

  // remove copy msg after 2 sec
  useEffect(() => {
    if (copyMsg) {
      setTimeout(() => {
        setCopyMsg('')
      }, 2000)
    }
  }, [copyMsg])

if (!dialogOpen) return

  return (
    <div className="dialog-overlay" onClick={(e) => stopCloseDialog(e)}>
      <div
        ref={dialogRef}
        className="dialog"
        onClick={(e) => stopCloseDialog(e)}
      >
        <button className="dialog-close" onClick={() => handleDialog(false)}>
          &#x2715;
        </button>
        <h1>Contact me</h1>
        <ul>
          {contactArr.map((contact, i) => (
            <li key={i}>
              {copyMsg === contact.type && <span className="copy-msg">Copied to clipboard!</span>}
              <span className="dialog-brush" onClick={() => showCopyMsg(contact.type, contact.text)}>
                <span>{ contact.type}</span>
              </span>{" "}
              {contact.text}
            </li>
          ))}
          <li>
            <a
              className="dialog-brush"
              href="https://www.linkedin.com/in/nicholas-haus-b8b58b277/"
              target="_blank"
            >
              <span>LinkedIn</span>
            </a>{" "}
            Nicholas Haus
          </li>
        </ul>
        <p>Looking forward to hearing from you!</p>
        <div className="dialog-decoration"></div>
      </div>
    </div>
  );
}

export default Contact
