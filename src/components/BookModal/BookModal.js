import "./BookModal.scss";
// import axios from "axios";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
import { useRef } from "react";


export default function BookModal({ closeModal, setAdd }) {
  const formRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("hello")

    // axios.post (url,{
      // id:v4(),
    //   title:formRef.current.title.value,
    //   author:formRef.current.author.value,
    //   series:formRef.current.series.value,
    //   rating:formRef.current.rating.value,
    //   finished:formRef.current.finished.value,
    // })
    // .catch((error) =>{
    //   console.log(error, "Error");
    // })
  };

  return (
    <main className="book-modal__background">
      <section className="book-modal__container">
        <header className="book-modal__header">Book</header>
        <form
          className="book-modal__form"
          onSubmit={handleOnSubmit}
          ref={formRef}
        >
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
              id="title"
            ></input>
          </label>
          <label className="book-modal__label">
            Author
            <input
              className="book-modal__input"
              type="text"
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
              id="author"
            ></input>
          </label>
          <label className="book-modal__label">
            Series
            <input
              className="book-modal__input"
              type="text"
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _ "
              id="series"
            ></input>
          </label>
          <label className="book-modal__label">
            Rating
            <Rating className="book-modal__rating" />
          </label>
          <label className="book-modal__label book-modal__label-finished">
            Finished
            <input
              className="book-modal__input book-modal__input-finished"
              type="date"
              id="finished"
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
            <button
              className="book-modal__add"
              type="submit"
              onClick={() => {
                closeModal(false);
                setAdd(false);
              }}
            >
              Add
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}
