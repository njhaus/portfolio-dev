import { useRef, useState, useEffect } from "react";
import { contactArr } from "../data/contactLinkData"

interface iContact {
  dialogOpen: boolean;
  handleDialog: (set: boolean) => void;
}

const Contact = ({ handleDialog, dialogOpen }: iContact) => {
  const [copyMsg, setCopyMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  const stopCloseDialog = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (
      //    @ts-ignore
      // This is the only way i was able to stop the event from propagating -- stop propagation didn't work and useing a ref to match the e.target didn't work.
      // Had to spread the classList beacuse it produces a DOMtokenList and not an array, which means I couldn't use includes() on it until I made it an array
      ![...e.target.classList].includes("dialog-overlay")
    ) {
      // Inside the dialog, do nothing
      return;
    }
    handleDialog(false);
  };

  const showCopyMsg = (type: string, text: string) => {
    setCopyMsg(type);
    navigator.clipboard.writeText(text);
  };

  // remove copy msg after 2 sec
  useEffect(() => {
    if (copyMsg) {
      setTimeout(() => {
        setCopyMsg("");
      }, 2500);
    }
  }, [copyMsg]);

  if (!dialogOpen) return;

  return (
    <div
      className="fixed bg-slate-800 bg-opacity-40 w-screen h-screen z-50 dialog-overlay overflow-y-auto"
      id="dialog-overlay"
      onClick={(e) => stopCloseDialog(e)}
    >
      <div
        ref={dialogRef}
        className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-100 pt-5 max-w-[25rem] rounded-2xl shadow-md overflow-y-auto overflow-x-hidden max-h-5/6 mt-5"
        onClick={(e) => stopCloseDialog(e)}
      >
        <button
          className="absolute right-3 top-2"
          onClick={() => handleDialog(false)}
        >
          &#x2715;
        </button>
        <h1 className="text-2xl">Contact me</h1>
        <img className="w-20 mx-auto" src="/logo-decoration.png" />
        <ul className="mt-5 w-4/6 mx-auto text-left">
          {contactArr.map((contact, i) => (
            <li key={i} className="relative">
              {copyMsg === contact.type && (
                <span className="absolute -top-5 text-slate-400 text-sm">
                  Copied to clipboard!
                </span>
              )}
              <span onClick={() => showCopyMsg(contact.type, contact.text)}>
                <button className="px-3 py-1 me-2 bg-xLight border-main border rounded-lg flex-grow">
                  {contact.type}
                </button>
              </span>{" "}
              {contact.text}
              <hr className="mx-auto bg-slate-600 my-5"></hr>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/nicholas-haus-b8b58b277/"
              target="_blank"
            >
              <button className="px-3 py-1 me-2 bg-xLight border-main border rounded-lg flex-grow">
                LinkedIn
              </button>
            </a>{" "}
            Nicholas Haus
          </li>
        </ul>
        <div className="dialog-decoration w-100 h-4 bg-slate-200 mt-8 mb-[-1px]"></div>
        <div className="bg-slate-200 p-5">
          <p>Looking forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
