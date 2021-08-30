import React, { useEffect } from "react";
import { DURATION } from "./constants";

const Toast = ({ message, kind }) => {
  const timeoutIds = [];

  useEffect(() => {
    const toastElements = document.getElementsByClassName("toast-container");
    timeoutIds.push(
      setTimeout(() => {
        toastElements[0].remove();
      }, DURATION),
    );

    return () => {
      while (timeoutIds.length) {
        clearTimeout(timeoutIds.shift());
      }
    };
  }, []);

  return <div className={`toast ${kind}`}>{message}</div>;
};

export default Toast;
