import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({open ,close, children}) => {
  //   useEffect(() => {
  //     const element = document.createElement("div");
  //     element.id = "custom-modal";
  //     document.appendChild(element);
  //   });

  return (
    <div onClick={close} className="fixed top-0 left-0 bottom-0 right-0 z-10 bg-[#0009] flex justify-center items-center">
      <div className="bg-white p-6 rounded-md min-w-[250px] min-h-[200px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
