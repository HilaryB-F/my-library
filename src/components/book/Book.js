import "./Book.scss";
import { useState, useEffect, useRef } from "react";
import ClickedBook from "../ClickedBook/ClickedBook";

export default function Book({ book, selectedBook, bookId}) {
  const [clickedBook, setClickedBook] = useState(false);
  let addRef = useRef();

  let id =bookId;

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
  return (
    <>
      {book.filter((books)=>{
        return books.id !== id;
      })
      
      .map((books) => {
        return (
          <main ref={addRef} key={books.id}>
            <div
              className="clicked__trigger"
              onClick={() => {
                setClickedBook(!clickedBook);
              }}
            >
              <div className="main__slot">{books.title}</div>
            </div>
            <div
              className={`clicked__book ${clickedBook ? "active" : "inactive"}`}
            >
              {clickedBook && <ClickedBook books={books} selectedBook={selectedBook}/>}
            </div>
          </main>
        );
      })}
    </>
  );
}
