import "./Delete.scss";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Delete({
  setOpenDelete,
  selectedBook,
  getBooks,
  clickedBook,
}) {
  const id = selectedBook.id;

  const navigate = useNavigate();

  const deleteBook = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/library`, { data: { id } })
      .then(getBooks)
      .catch((error) => {
        console.log(error, "Error");
      });
    setOpenDelete(false);
    if (clickedBook) {
      clickedBook(false);
    }
    navigate("/library");
  };

  return (
    <div className="delete__modal">
      <h2 className="delete__text" onClick={deleteBook}>
        Yes
      </h2>
      <h2
        className="delete__text delete__text-right"
        onClick={() => {
          setOpenDelete(false);
        }}
      >
        Cancel
      </h2>
    </div>
  );
}
