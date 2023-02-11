import "./BookModal.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Rating from "../rating/Rating";
import { useRef } from "react";
import { v4 } from "uuid";
import Arrow from "../../assets/icons/arrow-down.png";

export default function BookModal({
  closeModal,
  setAdd,
  setShowMenu,
  getBooks
}) {

  const formRef = useRef();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setAdd(false);
    closeModal(false);
    setShowMenu(false);

    axios
      .post("http://localhost:8080/library", {
        id: v4(),
        title: formRef.current.title.value,
        author: formRef.current.author.value,
        series: formRef.current.series.value,
        rating: formRef.current.rating.value,
        order: formRef.current.order.value,
        finished: formRef.current.finished.value,
        color: formRef.current.color.value,
        room: formRef.current.room.value,
      })
      .then(getBooks)
      .catch((error) => {
        console.log(error, "Error");
      });
    navigate("/library");
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
            Book #
            <input
              className="book-modal__input"
              type="number"
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _ "
              id="order"
            ></input>
          </label>
          <label className="book-modal__label">
            Rating
            <Rating />
          </label>
          <label className="book-modal__label">
            Colour
        
            <select className="color__container" id="color">

                <option className="color__text">Leather (Default)</option>
                <option className="color__text">Purple</option>
                <option className="color__text">Blue</option>
                <option className="color__text">Pink</option>
                <option className="color__text">Turquoise</option>
                
              
            </select>
          </label>
          <label className="book-modal__label">
            Room
            <select className="color__container" id="room">
                <option className="color__text">_ _ _ _ _ _ _ _ _ _ _</option>
                <option className="color__text">Unread</option>     
            </select>
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
              to="/library"
              onClick={() => {
                closeModal(false);
                setAdd(false);
                setShowMenu(false);
              }}
            >
              Cancel
            </Link>
            <button className="book-modal__add" type="submit">
              Add
            </button>
          </section>
        </form>
      </section>
    </main>
  );
}
