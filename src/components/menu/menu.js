import "./menu.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Bookdrop from "../book-drop/book-drop";

export default function Menu() {
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
    };
  });

  return (
    <>
      <section className="dropdown__container">
        <section className="add-book__container" ref={addRef}>
          <div
            className="book__trigger dropdown__text"
            onClick={() => {
              setAdd(!add);
            }}
          >
            Add
          </div>
          <div className={`add-book__down ${add ? "active" : "inactive"}`}>
        {add && <Bookdrop setAdd={setAdd} />}
      </div>
        </section>
        <hr></hr>
        <h2 className="dropdown__text">Theme</h2>
        <hr></hr>
        <h2 className="dropdown__text">View</h2>
      </section>
     
    </>
  );
}
