import "./book-drop.scss";
import { useState } from "react";
import BookModal from "../BookModal/BookModal";
import PlantModal from "../PlantModal/PlantModal";
import DecorModal from "../DecorModal/DecorModal";

export default function Bookdrop({ setAdd }) {
  const [openModal, setOpenModal] = useState(false);
  const [openPlantModal, setOpenPlantModal] = useState(false);
  const [openDecorModal, setOpenDecorModal] = useState(false);

  return (
    <section className="drop__container">
      <h2
        className="drop__text"
        onClick={() => {
          setOpenModal(true);
          setOpenPlantModal(false)
          setOpenDecorModal(false)
        }}
      >
        Book
      </h2>
      <hr></hr>
      <h2
        className="drop__text"
        onClick={() => {
          setOpenPlantModal(true);
          setOpenModal(false)
          setOpenDecorModal(false)
        }}
      >
        Plant
      </h2>
      <hr></hr>
      <h2
        className="drop__text"
        onClick={() => {
          setOpenDecorModal(true);
          setOpenPlantModal(false)
          setOpenModal(false)
        }}
      >
        Decor
      </h2>
      <div
        className={`book-modal__dropdown ${openModal ? "active" : "inactive"}`}
      >
        {openModal && (
          <BookModal
            closeModal={setOpenModal}
            openModal={openModal}
            setAdd={setAdd}
          />
        )}
      </div>
      <div
        className={`plant-modal__dropdown ${openPlantModal ? "active" : "inactive"}`}
      >
        {openPlantModal && (
          <PlantModal
            closeModal={setOpenPlantModal}
            openModal={openPlantModal}
            setAdd={setAdd}
          />
        )}
      </div>
      <div
        className={`decor-modal__dropdown ${openDecorModal ? "active" : "inactive"}`}
      >
        {openDecorModal && (
          <DecorModal
            closeModal={setOpenDecorModal}
            openModal={openDecorModal}
            setAdd={setAdd}
          />
        )}
      </div>
    </section>
  );
}
