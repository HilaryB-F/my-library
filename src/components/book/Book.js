import "./Book.scss";
import { useState, useEffect, useRef } from "react";
import ClickedBook from "../ClickedBook/ClickedBook";
import { v4 } from "uuid";
import DecorDelete from "../DecorDelete/DecorDelete";

export default function Book({ book, bookId, getBooks }) {
  const [clickedBook, setClickedBook] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [openDecorDelete, setOpenDecorDelete] = useState(false);

  let addRef = useRef();
  let id = bookId;

  useEffect(() => {
    let handler = (e) => {
      if (!addRef.current.contains(e.target)) {
        setClickedBook(false);
        setOpenDecorDelete(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const selectedBook = book.find((book) => book.id === selectedBookId);

  return (
    <main className="main__shelf main__shelf-books" ref={addRef}>
      {book
        .filter((books) => {
          return books.id !== id;
        })

        .map((books) => {
          let image = books.image;
          if (image === "http://localhost:8080/ladder.png") {
            return (
              <img
                key={v4()}
                src={books.image}
                alt="details"
                className="main__image-ladder"
                onClick={() => {
                  setOpenDecorDelete(!openDecorDelete);
                  setSelectedBookId(books.id);
                }}
              />
            );
          } else if (image === "http://localhost:8080/zebra.png") {
            return (
              <img
                key={v4()}
                src={books.image}
                alt="details"
                className="main__image-zebra"
                onClick={() => {
                  setOpenDecorDelete(!openDecorDelete);
                  setSelectedBookId(books.id);
                }}
              />
            );
          } else if (image === "http://localhost:8080/dino.png") {
            return (
              <img
                key={v4()}
                src={books.image}
                alt="Dinosaur Statue"
                className="main__image-dino"
                onClick={() => {
                  setOpenDecorDelete(!openDecorDelete);
                  setSelectedBookId(books.id);
                }}
              />
            );
          } else if (image) {
            return (
              <img
                key={v4()}
                src={books.image}
                alt="Decor"
                className="main__image"
                onClick={() => {
                  setOpenDecorDelete(!openDecorDelete);
                  setSelectedBookId(books.id);
                }}
              />
            );
          } else if (books.color === "Purple") {
            return (
              <main key={v4()}>
                <div
                  className="clicked__trigger "
                  onClick={() => {
                    setClickedBook(!clickedBook);
                    setSelectedBookId(books.id);
                  }}
                >
                  {" "}
                  <div className="main__slot-purple" id={`${books.id}`}>
                    {books.title}
                  </div>
                </div>
              </main>
            );
          } else if (books.color === "Blue") {
            return (
              <main key={v4()}>
                <div
                  className="clicked__trigger "
                  onClick={() => {
                    setClickedBook(!clickedBook);
                    setSelectedBookId(books.id);
                  }}
                >
                  {" "}
                  <div className="main__slot-blue" id={`${books.id}`}>
                    {books.title}
                  </div>
                </div>
              </main>
            );
          } else if (books.color === "Pink") {
            return (
              <main key={v4()}>
                <div
                  className="clicked__trigger "
                  onClick={() => {
                    setClickedBook(!clickedBook);
                    setSelectedBookId(books.id);
                  }}
                >
                  {" "}
                  <div className="main__slot-pink" id={`${books.id}`}>
                    {books.title}
                  </div>
                </div>
              </main>
            );
          } else if (books.color === "Turquoise") {
            return (
              <main key={v4()}>
                <div
                  className="clicked__trigger "
                  onClick={() => {
                    setClickedBook(!clickedBook);
                    setSelectedBookId(books.id);
                  }}
                >
                  {" "}
                  <div className="main__slot-turquoise" id={`${books.id}`}>
                    {books.title}
                  </div>
                </div>
              </main>
            );
          }
          return (
            <main key={v4()}>
              <div
                className="clicked__trigger "
                onClick={() => {
                  setClickedBook(!clickedBook);
                  setSelectedBookId(books.id);
                }}
              >
                {" "}
                <div className="main__slot" id={`${books.id}`}>
                  {books.title}
                </div>
              </div>
            </main>
          );
        })}
      <div className={`clicked__book ${clickedBook ? "active" : "inactive"}`}>
        {clickedBook && (
          <ClickedBook
            selectedBook={selectedBook}
            getBooks={getBooks}
            clickedBook={setClickedBook}
          />
        )}
      </div>
      <div
        className={`decor-delete__dropdown ${
          openDecorDelete ? "active" : "inactive"
        }`}
      >
        {openDecorDelete && (
          <DecorDelete
            setOpenDelete={setOpenDecorDelete}
            selectedBook={selectedBook}
            getBooks={getBooks}
            clickedBook={clickedBook}
          />
        )}
      </div>
    </main>
  );
}
