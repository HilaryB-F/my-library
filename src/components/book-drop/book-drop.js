import "./book-drop.scss";
import { useState } from "react";
import BookModal from "../BookModal/BookModal";
import PlantModal from "../PlantModal/PlantModal";
import DecorModal from "../DecorModal/DecorModal";

export default function Bookdrop({
  setAdd,
  setShowMenu,
  getBooks,
  setBookColor,
  book,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [openPlantModal, setOpenPlantModal] = useState(false);
  const [openDecorModal, setOpenDecorModal] = useState(false);

  return (
    <section className="drop__container">
      <h2
        className="drop__text"
        onClick={() => {
          setOpenModal(true);
          setOpenPlantModal(false);
          setOpenDecorModal(false);
        }}
      >
        Book
      </h2>
      <hr></hr>
      <h2
        className="drop__text"
        onClick={() => {
          setOpenPlantModal(true);
          setOpenModal(false);
          setOpenDecorModal(false);
        }}
      >
        Plant
      </h2>
      <hr></hr>
      <h2
        className="drop__text"
        onClick={() => {
          setOpenDecorModal(true);
          setOpenPlantModal(false);
          setOpenModal(false);
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
            setShowMenu={setShowMenu}
            getBooks={getBooks}
            setBookColor={setBookColor}
            book={book}
          />
        )}
      </div>
      <div
        className={`plant-modal__dropdown ${
          openPlantModal ? "active" : "inactive"
        }`}
      >
        {openPlantModal && (
          <PlantModal
            setAdd={setAdd}
            setShowMenu={setShowMenu}
            getBooks={getBooks}
          />
        )}
      </div>
      <div
        className={`decor-modal__dropdown ${
          openDecorModal ? "active" : "inactive"
        }`}
      >
        {openDecorModal && (
          <DecorModal
            setAdd={setAdd}
            setShowMenu={setShowMenu}
            getBooks={getBooks}
          />
        )}
      </div>
    </section>
  );
}
