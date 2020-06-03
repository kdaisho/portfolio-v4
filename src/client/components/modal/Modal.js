import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ children, className }) => {
    console.log(children);
    const elementRef = useRef(null);
    if (!elementRef.current) {
        elementRef.current = document.createElement("div");
        elementRef.current.classList.add("backdrop");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elementRef.current);

        return () => modalRoot.removeChild(elementRef.current);
    }, []);

    return createPortal(<div className={className}>{children}</div>, elementRef.current);
};

export default Modal;
