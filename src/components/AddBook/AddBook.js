import './AddBook.scss'
import Bookdrop from "../book-drop/book-drop";
import { useState, useEffect, useRef } from "react";

export default function AddBook() {
  const [add, setAdd] = useState(false);
  let addRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!addRef.current.contains(e.target)) {
        setAdd(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    <section className="book__container" ref={addRef}>
      <div
        className="book__trigger"
        onClick={() => {
          setAdd(!add);
        }}
      >
        <div className="main__slot"></div>
      </div>
      <div className={`book__dropdown ${add ? "active" : "inactive"}`}>
        <Bookdrop setAdd={setAdd} />
      </div>
    </section>
  );
}