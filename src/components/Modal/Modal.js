import React from "react";
import { CloseIcon } from "../Icons";

const Modal = ({ open, close, children, title,containerClassName, contentClassName, modalClassName }) => {

  return (
    <>
      {open ? (
        <div
          onClick={close}
          className={`fixed top-0 left-0 bottom-0 right-0 z-10 bg-[#0009] flex justify-center items-center ${containerClassName}`}
        >
          <div
            className={`bg-white  rounded-md min-w-[250px] min-h-[200px] overflow-hidden ${contentClassName}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {title ? (
              <div className="flex justify-between items-center p-3 px-6 mb-8 bg-[#F2F2F2]">
                {title}
                <button
                  className="rounded-full h-6 w-6 border border-gray-400 flex justify-center items-center"
                  onClick={close}
                >
                  <CloseIcon className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            ) : null}
            <div className={`${title? 'p-4 pt-1 px-8':"p-6"} ${modalClassName}`}>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
