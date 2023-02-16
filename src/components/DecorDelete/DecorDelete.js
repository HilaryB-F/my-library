import "./DecorDelete.scss";
import axios from "axios";
import React from "react";
const URL = process.env.URL 


export default function Delete({
  setOpenDelete,
  selectedBook,
  getBooks,
  clickedBook,
}) {
  const id = selectedBook.id;

  const deleteBook = (e) => {
    e.preventDefault();
    axios
      .delete(URL + "/addDecor", { data: { id } })
      .then(getBooks)
      .catch((error) => {
        console.log(error, "Error");
      });
    setOpenDelete(false);
    if (clickedBook) {
      clickedBook(false);
    }
  };

  return (
    <div className="decor-delete__modal">
      <h1 className="decor-delete__title">Delete</h1>
      <div className="decor-delete__button">
        <h2 className="decor-delete__text" onClick={deleteBook}>
          Yes
        </h2>
        <h2
          className="decor-delete__text decor-delete__text-right"
          onClick={() => {
            setOpenDelete(false);
          }}
        >
          Cancel
        </h2>
      </div>
    </div>
  );
}
