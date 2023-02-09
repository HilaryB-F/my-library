import './UnreadBooks.scss'
import { useState, useEffect, useRef } from "react";
import ClickedBook from "../ClickedBook/ClickedBook";
import { v4 } from "uuid";

export default function UnreadBooks(unread, unreadBookId) {
  
  const [clickedBook, setClickedBook] = useState(false);
  const [selectedUnreadBookId, setSelectedUnreadBookId] = useState("");

  let addRef = useRef();
  let id = unreadBookId;

  useEffect(() => {
    let handler = (e) => {
      if (!addRef.current.contains(e.target)) {
        setClickedBook(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const selectedBook = unread.find((unread) => unread.id === selectedUnreadBookId);

  return (
    <main className="main__shelf main__shelf-books">
      {unread
        .filter((unreadBooks) => {
          return unreadBooks.id !== id;
        })

        .map((unreadBooks) => {
          let image = unreadBooks.image;
          if (image === "http://localhost:8080/ladder.png") {
            return (
              <img
                key={v4()}
                src={unreadBooks.image}
                alt="details"
                className="main__image-ladder"
              />
            );
          } else if (image === "http://localhost:8080/zebra.png") {
            return (
              <img
                key={v4()}
                src={unreadBooks.image}
                alt="details"
                className="main__image-zebra"
              />
            );}
            else if (image === "http://localhost:8080/dino.png") {
            return (
              <img
                key={v4()}
                src={unreadBooks.image}
                alt="details"
                className="main__image-dino"
              />
            );}
            else if (image) {
            return (
              <img
                key={v4()}
                src={unreadBooks.image}
                alt="details"
                className="main__image"
              />
            );
          }
          return (
            <main ref={addRef} key={v4()}>
              <div
                className="clicked__trigger "
                onClick={() => {
                  setClickedBook(!clickedBook);
                  setSelectedUnreadBookId(unreadBooks.id);
                }}
              >
                <div className="main__slot" id={`${unreadBooks.id}`}>
                  {unreadBooks.title}
                </div>
              </div>
            </main>
          );
        })}
      <div className={`clicked__book ${clickedBook ? "active" : "inactive"}`}>
        {clickedBook && <ClickedBook selectedBook={selectedBook} />}
      </div>
    </main>
  );
}
