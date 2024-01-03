
import { useRef } from "react";

interface iContact {
    dialogOpen: boolean;
    handleDialog: (set: boolean) => void;
}

const Contact = ({ handleDialog, dialogOpen }: iContact) => {
    
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

if (!dialogOpen) return

  return (
    <div className="dialog-overlay" onClick={(e) => stopCloseDialog(e)}>
      <div ref={dialogRef} className="dialog" onClick={(e) => stopCloseDialog(e)}>
        <button className="dialog-close" onClick={() => handleDialog(false)}>
          &#x2715;
        </button>
        <h1>Contact me</h1>
        <ul>
          <li>
            <span className="dialog-brush">Email</span> njhaus@gmail.com
          </li>
          <li>
            <span className="dialog-brush">Phone</span> (913) 203-0504
          </li>
          <li>
            <span className="dialog-brush">Discord</span> njhaus
          </li>
        </ul>
        <p>Looking forward to hearing from you!</p>
        <div className="dialog-decoration"></div>
        <div className="dialog-decoration"></div>
        <div className="dialog-decoration"></div>
      </div>
    </div>
  );
}

export default Contact
