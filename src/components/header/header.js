import "./header.scss";
import Menu from "../../assets/icons/menu.png";
import Dropdown from "../menu/menu";
import { useState, useRef, useEffect } from "react";
import { v4 } from "uuid";

export default function Header({
  book,
  setActive,
  active,
  setBookColor,
  getBooks,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const [search, setSearch] = useState("");

  const menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

 
  return (
    <header className="header__container">
      {active === "All" && <h1 className="header__title">My Library</h1>}
      {active === "Unread" && <h1 className="header__title">Unread</h1>}
      <nav className="header__nav">
        <input
          className="header__nav--search"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* {book
          .filter((item) => {
            if (!search) {
              console.log(item.title)
              return item;
            } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return <h4>{item.title}</h4>;
          })} */}

        <section className="menu__container" ref={menuRef}>
          <div
            className="menu__trigger"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img className="header__nav--menu" src={Menu} alt="Menu" />
          </div>
          <div className={`menu__dropdown ${showMenu ? "active" : "inactive"}`}>
            <Dropdown
              setShowMenu={setShowMenu}
              book={book}
              setActive={setActive}
              setBookColor={setBookColor}
              getBooks={getBooks}
            />
          </div>
        </section>
      </nav>
    </header>
  );
}
