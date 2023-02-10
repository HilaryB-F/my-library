import "./menu.scss";
import { useEffect, useRef, useState } from "react";
import Bookdrop from "../book-drop/book-drop";
import ViewDrop from "../view-drop/ViewDrop";

export default function Menu({setShowMenu, book}) {
  const [add, setAdd] = useState(false);
  const [addView, setAddView] = useState(false);
  let addRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!addRef.current.contains(e.target)) {
        setAdd(false)
        setAddView(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <section className="dropdown__container" ref={addRef}>
        <section className="add-book__container" >
          <div
            className="book__trigger dropdown__text"
            onClick={() => {
              setAdd(!add)
              setAddView(false)
              ;
            }}
          >
            Add
          </div>
          <div className={`add-book__down ${add ? "active" : "inactive"}`}>
        {add && <Bookdrop setAdd={setAdd} setShowMenu={setShowMenu} setView={setAddView} />}
      </div>
        </section>
        <hr></hr>
        <h2 className="dropdown__text">Theme</h2>
        <hr></hr>
        <section className="add-book__container">
          <div
            className="book__trigger dropdown__text"
            onClick={() => {
              setAdd(false)
              setAddView(!addView);
            }}
          >
            View
          </div>
          <div className={`add-view__drop ${addView ? "active" : "inactive"}`}>
        {addView && <ViewDrop book={book} />}
      </div>
        </section>
      </section>
     
    </>
  );
}
