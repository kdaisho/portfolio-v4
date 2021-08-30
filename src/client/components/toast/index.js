import React from "react";
import ReactDOM from "react-dom";
import Toast from "./Toast";
import { DURATION } from "./constants";
import "./toast.css";

export const showToast = ({ message, kind }) => {
  const div = document.createElement("div");
  div.className = "toast-container";
  ReactDOM.render(<Toast message={message} kind={kind} />, document.body.appendChild(div));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, DURATION);
  });
};
