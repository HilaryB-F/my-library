import "./BookModal.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Rating from "../rating/Rating";
import Arrow from "../../assets/icons/arrow-down.png";
import ColorModal from "../ColorModal/ColorModal";
import RoomModal from "../RoomModal/RoomModal";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookModal({
  closeModal,
  setAdd,
  setShowMenu,
  getBooks,
}) {
  const formRef = useRef();
  const navigate = useNavigate();

  const notAdded = () =>
    toast.error("😖 Oh No! You forgot something!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [series, setSeries] = useState("");
  const [order, setOrder] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSeries = (e) => {
    setSeries(e.target.value);
  };
  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  const [openColor, setOpenColor] = useState(false);
  const [openRoom, setOpenRoom] = useState(false);

  const [colorValue, setColorValue] = useState("Brown");
  const [roomValue, setRoomValue] = useState("My Library");

  const colorChange = (e) => {
    setColorValue(e.target.value);
  };
  const roomChange = (e) => {
    setRoomValue(e.target.value);
  };

  const isFormValid = () => {
    if (!title || !author || !order) {
      return false;
    }
    return true;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
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
      setAdd(false);
      closeModal(false);
      setShowMenu(false);
    } else {
      return notAdded();
    }
  };
  return (
    <main className="book-modal__background">
        <ToastContainer className="toast" />

      <section className="book-modal__container">
        <header className="book-modal__header">Book</header>
        <form
          className="book-modal__form"
          onSubmit={handleOnSubmit}
          ref={formRef}
        >
          {/* <label className="book-modal__label">
            Search
            <input
              className="book-modal__input book-modal__input-search"
              type="search"
              placeholder=" _ _ _ _ _ _ _ _ _ _ _ "
            ></input>
          </label> */}
          <label className="book-modal__label">
            Title
            <input
              value={title}
              onChange={handleTitle}
              className="book-modal__input"
              type="text"
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
              id="title"
            ></input>
          </label>
          <label className="book-modal__label">
            Author
            <input
              value={author}
              onChange={handleAuthor}
              className="book-modal__input"
              type="text"
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _"
              id="author"
            ></input>
          </label>
          <label className="book-modal__label">
            Series
            <input
              value={series}
              onChange={handleSeries}
              className="book-modal__input"
              type="text"
              placeholder="_ _ _ _ _ _ _ _ _ _ _ _ "
              id="series"
            ></input>
          </label>
          <label className="book-modal__label">
            Book #
            <input
              value={order}
              onChange={handleOrder}
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
            <div className="book-modal__input-img">
              <input
                type="text"
                className="book-modal__input book-modal__input-color"
                id="color"
                value={colorValue}
                onChange={colorChange}
              ></input>
              <img
                src={Arrow}
                alt="Arrow Down"
                className="book-modal__icon"
                onClick={() => {
                  setOpenColor(!openColor);
                  setOpenRoom(false);
                }}
              />
            </div>
          </label>
          <label className="book-modal__label">
            Room
            <div className="book-modal__input-img">
              <input
                type="text"
                className="book-modal__input book-modal__input-room"
                id="room"
                value={roomValue}
                onChange={roomChange}
              ></input>
              <img
                src={Arrow}
                alt="Arrow Down"
                className="book-modal__icon"
                onClick={() => {
                  setOpenRoom(!openRoom);
                  setOpenColor(false);
                }}
              />
            </div>
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
        <div
          className={`color-modal__dropdown ${
            openColor ? "active" : "inactive"
          }`}
        >
          {openColor && (
            <ColorModal
              setColorValue={setColorValue}
              setOpenColor={setOpenColor}
            />
          )}
        </div>
        <div
          className={`room-modal__dropdown ${openRoom ? "active" : "inactive"}`}
        >
          {openRoom && (
            <RoomModal setRoomValue={setRoomValue} setOpenRoom={setOpenRoom} />
          )}
        </div>
      </section>
    </main>
  );
}
