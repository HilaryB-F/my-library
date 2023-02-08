import "./Book.scss";
import { useState, useEffect, useRef } from "react";
import ClickedBook from "../ClickedBook/ClickedBook";
import { v4 } from "uuid";


export default function Book({ book, bookId}) {
  const [clickedBook, setClickedBook] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState("");

  let addRef = useRef();
  let id = bookId 


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

    const selectedBook = book.find(book => book.id === selectedBookId);

    

  return (
    <main className="main__shelf main__shelf-books">
      {book
        .filter((books) => {
          return books.id !== id;
        })

        .map((books) => {
          return (
            <main ref={addRef} key={v4()} >
              <div
                className="clicked__trigger "
                onClick={() => {
                  setClickedBook(!clickedBook)
                  setSelectedBookId(books.id)
                }}
              >
                <div className="main__slot" id={`${books.id}`}>{books.title}</div>
              </div>
             
            </main>
          );
        })}
         <div
                className={`clicked__book ${
                  clickedBook ? "active" : "inactive"
                }`}
              >
                {clickedBook && (
                  <ClickedBook selectedBook={selectedBook}/>
                )}
              </div>
    </main >
  );
}





