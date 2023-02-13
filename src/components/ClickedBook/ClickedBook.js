import "./ClickedBook.scss";
import Decal from "../../assets/images/decal.png";
import Decal2 from "../../assets/images/decal2.png";
import BookDecal from "../../assets/images/bookDecal.gif";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Delete from "../Delete/Delete";
import EditBook from "../EditBook/EditBooks";

export default function ClickedBook({ selectedBook, getBooks, clickedBook }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const noNum = selectedBook.order;
  if (!noNum) {
    return (
      <main className="clicked__background" key={selectedBook.id}>
        <section className="clicked__container">
          <img src={Decal} alt="Book decal" className="clicked__decal-top" />
          <h1 className="clicked__title">{selectedBook.title}</h1>
          <h2 className="clicked__author">{selectedBook.author}</h2>
          <h2 className="clicked__series">{selectedBook.series}</h2>
          <div className="clicked__rate">
            {[...Array(5)].map((heart, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    className="clicked__radio"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                  />
                  <FaHeart
                    className="clicked__hearts"
                    size={40}
                    color={
                      selectedBook.rating >= ratingValue ? "#F84B4B" : "#4B1F19"
                    }
                  />
                </label>
              );
            })}
          </div>
          <img
            src={BookDecal}
            alt="Book decal"
            className="clicked__decal-main"
          />
          <h2 className="clicked__finished">
            Finished: {selectedBook.finished}
          </h2>
          <img
            src={Decal2}
            alt="Book decal"
            className="clicked__decal-bottom"
          />
           <section className="clicked__buttons">
            <h2
              className="clicked__buttons-text"
              onClick={() => {
                setOpenDelete(!openDelete);
              }}
            >
              Delete
            </h2>
            <h2 className="clicked__buttons-text" onClick={() => {
                setOpenEdit(!openEdit);
              }}>Edit</h2>
          </section>
            <div
            className={`delete__dropdown ${openDelete ? "active" : "inactive"}`}
          >
            {openDelete && <Delete setOpenDelete={setOpenDelete} selectedBook={selectedBook} getBooks={getBooks} clickedBook={clickedBook}/>}
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main className="clicked__background" key={selectedBook.id}>
        <section className="clicked__container">
          <img src={Decal} alt="Book decal" className="clicked__decal-top" />
          <h1 className="clicked__title">{selectedBook.title}</h1>
          <h2 className="clicked__series">
            {selectedBook.series}: Book {selectedBook.order}
          </h2>
          <h2 className="clicked__author">{selectedBook.author}</h2>

          <div className="clicked__rate">
            {[...Array(5)].map((heart, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    className="clicked__radio"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                  />
                  <FaHeart
                    className="clicked__hearts"
                    size={40}
                    color={
                      selectedBook.rating >= ratingValue ? "#F84B4B" : "#4B1F19"
                    }
                  />
                </label>
              );
            })}
          </div>
          <img
            src={BookDecal}
            alt="Book decal"
            className="clicked__decal-main"
          />
          <h2 className="clicked__finished">
            Finished: {selectedBook.finished}
          </h2>
          <img
            src={Decal2}
            alt="Book decal"
            className="clicked__decal-bottom"
          />
          <section className="clicked__buttons">
            <h2
              className="clicked__buttons-text"
              onClick={() => {
                setOpenDelete(!openDelete);
              }}
            >
              Delete
            </h2>
            <h2 className="clicked__buttons-text"  onClick={() => {
                setOpenEdit(!openEdit)}}>Edit</h2>
          </section>
          <div
            className={`delete__dropdown ${openDelete ? "active" : "inactive"}`}
          >
            {openDelete && <Delete setOpenDelete={setOpenDelete} selectedBook={selectedBook} getBooks={getBooks} clickedBook={clickedBook}/>}
          </div>
           <div
           className={`edit__dropdown ${openEdit ? "active" : "inactive"}`}
         >
           {openEdit && <EditBook setOpenEdit={setOpenEdit} selectedBook={selectedBook} getBooks={getBooks} />}
         </div>
        </section>
      </main>
    );
  }
}
