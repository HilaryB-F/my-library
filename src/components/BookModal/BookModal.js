import "./BookModal.scss";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

export default function BookModal({ closeModal, setAdd }) {
  return (
    <main className="book-modal__background">
      <section className="book-modal__container">
        <header className="book-modal__header">Book</header>
        <label className="book-modal__label">
          Search
          <input
            className="book-modal__input book-modal__input-search"
            type="search"
            placeholder=" _ _ _ _ _ _ _ _ _ _ _ "
          ></input>
        </label>
        <label className="book-modal__label">
          Title
          <input
            className="book-modal__input"
            type="text"
            placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
          ></input>
        </label>
        <label className="book-modal__label">
          Author
          <input
            className="book-modal__input"
            type="text"
            placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
          ></input>
        </label>
        <label className="book-modal__label">
          Series
          <input
            className="book-modal__input"
            type="text"
            placeholder="_ _ _ _ _ _ _ _ _ _ _ _ "
          ></input>
        </label>
        <label className="book-modal__label">
            Rating
          <Rating className = "book-modal__rating"/>
          </label>
          <label className="book-modal__label book-modal__label-finished">
          Finished
          <input
            className="book-modal__input book-modal__input-finished"
            type="date"
          ></input>
        </label>
        <section className="buttons">
          <Link
            className="book-modal__close"
            to="/library/addBook"
            onClick={() => {
              closeModal(false);
              setAdd(false);
            }}
          >
            Cancel
          </Link>
          <button className="book-modal__add">Add</button>
        </section>
      </section>
    </main>
  );
}
