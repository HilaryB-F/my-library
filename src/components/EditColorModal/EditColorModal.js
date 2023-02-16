import "./EditColorModal.scss";

import React from "react";

export default function ColorModal({ setColorValue, setOpenColor }) {
  return (
    <main className="edit-color-modal__container">
      <h2
        className="edit-color-modal__text"
        onClick={() => {
          setColorValue("Brown");
          setOpenColor(false);
        }}
      >
        Brown
      </h2>
      <h2
        className="edit-color-modal__text"
        onClick={() => {
          setColorValue("Purple");
          setOpenColor(false);
        }}
      >
        Purple
      </h2>
      <h2
        className="edit-color-modal__text"
        onClick={() => {
          setColorValue("Pink");
          setOpenColor(false);
        }}
      >
        Pink
      </h2>
      <h2
        className="edit-color-modal__text"
        onClick={() => {
          setColorValue("Blue");
          setOpenColor(false);
        }}
      >
        Blue
      </h2>
      <h2
        className="edit-color-modal__text edit-color-modal__text-bottom"
        onClick={() => {
          setColorValue("Turquoise");
          setOpenColor(false);
        }}
      >
        Turquoise
      </h2>
    </main>
  );
}
