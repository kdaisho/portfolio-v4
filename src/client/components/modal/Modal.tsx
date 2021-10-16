import React, { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal: FunctionComponent = ({ children }) => {
  const elementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementRef.current);

    return () => {
      if (elementRef.current) {
        modalRoot.removeChild(elementRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
