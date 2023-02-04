import "./book-drop.scss";
import { useState } from "react";
import BookModal from "../BookModal/BookModal";

export default function Bookdrop({setAdd}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="drop__container">
      <h2
        className="drop__text"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Book
      </h2>
      <hr></hr>
      <h2 className="drop__text">Plant</h2>
      <hr></hr>
      <h2 className="drop__text">Decor</h2>
      <div className={`book-modal__dropdown ${openModal ? "active" : "inactive"}`}>
      {openModal && <BookModal closeModal={setOpenModal} openModal={openModal} setAdd={setAdd}/>}
     </div>
    </section>
  );
}
