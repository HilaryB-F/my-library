import "./Book.scss";
import { useState, useEffect, useRef } from "react";
import ClickedBook from "../ClickedBook/ClickedBook";

export default function Book() {
  const [clickedBook, setClickedBook] = useState(false);
  let addRef = useRef();

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
    <main ref={addRef}>
      <div
      className="clicked__trigger"
        onClick={() => {
          setClickedBook(!clickedBook);
        }}
      >
        <div className="main__slot"></div>
      </div>
      <div className={`clicked__book ${clickedBook ? "active" : "inactive"}`}>
        {clickedBook && <ClickedBook />}
      </div>
    </main>
  );
}
