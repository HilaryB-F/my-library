import "./EditBooks.scss";
import axios from "axios";
import { Link} from "react-router-dom";
import EditRating from "../EditRating/EditRating";
import Arrow from "../../assets/icons/arrow-down.png";
import EditColorModal from "../EditColorModal/EditColorModal";
import EditRoomModal from "../EditRoomModal/EditRoomModal";
import { useRef, useState } from "react";
const URL = process.env.URL 



export default function EditBook({ setOpenEdit, getBooks, selectedBook }) {
  const formRef = useRef();

  const [openColor, setOpenColor] = useState(false);
  const [openRoom, setOpenRoom] = useState(false);

  const [title, setTitle] = useState(selectedBook.title);
  const [author, setAuthor] = useState(selectedBook.author);
  const [series, setSeries] = useState(selectedBook.series);
  const [order, setOrder] = useState(selectedBook.order);
  const [finished, setFinished] = useState(selectedBook.finished);

  const [colorValue, setColorValue] = useState(selectedBook.color || "Brown");
  const [roomValue, setRoomValue] = useState(selectedBook.room || "My Library");

  const id = selectedBook.id;

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
  const handleFinished = (e) => {
    setFinished(e.target.value);
  };
  const colorChange = (e) => {
    setColorValue(e.target.value);
  };
  const roomChange = (e) => {
    setRoomValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .put(URL + "/library", {
        id: id,
        title: formRef.current.title.value,
        author: formRef.current.author.value,
        series: formRef.current.series.value,
        rating: formRef.current.rating.value || selectedBook.rating,
        order: formRef.current.order.value,
        finished: formRef.current.finished.value,
        color: formRef.current.color.value,
        room: formRef.current.room.value,
      })
      .then(getBooks)
      .catch((error) => {
        console.log(error, "Error");
      });
    setOpenEdit(false);
  };
  return (
    <main className="edit__background">
      <section className="edit__container">
        <header className="edit__header">Book</header>
        <form className="edit__form" onSubmit={handleOnSubmit} ref={formRef}>
          <label className="edit__label">
            Title
            <input
              className="edit__input"
              type="text"
              value={title}
              onChange={handleTitle}
              id="title"
            ></input>
          </label>
          <label className="edit__label">
            Author
            <input
              className="edit__input"
              type="text"
              value={author}
              onChange={handleAuthor}
              id="author"
            ></input>
          </label>
          <label className="edit__label">
            Series
            <input
              className="edit__input"
              type="text"
              value={series}
              onChange={handleSeries}
              id="series"
            ></input>
          </label>
          <label className="edit__label">
            Book #
            <input
              className="edit__input"
              type="number"
              value={order}
              onChange={handleOrder}
              id="order"
            ></input>
          </label>
          <label className="edit__label">
            Rating
            <EditRating selectedBook={selectedBook} />
          </label>
          <label className="edit__label">
            Colour
            <div className="edit__input-img">
              <input
                type="text"
                className="edit__input edit__input-color"
                id="color"
                value={colorValue}
                onChange={colorChange}
              ></input>
              <img
                src={Arrow}
                alt="Arrow Down"
                className="edit__icon"
                onClick={() => {
                  setOpenColor(!openColor);
                  setOpenRoom(false);
                }}
              />
            </div>
          </label>
          <label className="edit__label">
            Room
            <div className="edit__input-img">
              <input
                type="text"
                className="edit__input edit__input-room"
                id="room"
                value={roomValue}
                onChange={roomChange}
              ></input>
              <img
                src={Arrow}
                alt="Arrow Down"
                className="edit__icon"
                onClick={() => {
                  setOpenRoom(!openRoom);
                  setOpenColor(false);
                }}
              />
            </div>
          </label>
          <label className="edit__label edit__label-finished">
            Finished
            <input
              className="edit__input edit__input-finished"
              type="date"
              id="finished"
              value={finished}
              onChange={handleFinished}
            ></input>
          </label>
          <section className="edit__buttons">
            <Link
              className="edit__close"
              to="/library"
              onClick={() => {
                setOpenEdit(false);
              }}
            >
              Cancel
            </Link>
            <button className="edit__update" type="submit">
              Update
            </button>
          </section>
        </form>
        <div
          className={`edit-color-modal__dropdown ${
            openColor ? "active" : "inactive"
          }`}
        >
          {openColor && (
            <EditColorModal
              setColorValue={setColorValue}
              setOpenColor={setOpenColor}
              selectedBook={selectedBook}
            />
          )}
        </div>
        <div
          className={`edit-room-modal__dropdown ${
            openRoom ? "active" : "inactive"
          }`}
        >
          {openRoom && (
            <EditRoomModal
              setRoomValue={setRoomValue}
              setOpenRoom={setOpenRoom}
            />
          )}
        </div>
      </section>
    </main>
  );
}
