import "./header.scss";
import Menu from "../../assets/icons/menu.png";
import Dropdown from "../menu/menu";
import { useState, useRef, useEffect } from "react";

export default function Header({ book }) {
  const [showMenu, setShowMenu] = useState(false);

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
      <h1 className="header__title">My Library</h1>
      <nav className="header__nav">
        <input
          className="header__nav--search"
          type="search"
          placeholder="Search..."
        />
        
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
            <Dropdown />
          </div>
        </section>
      </nav>
    </header>
  );
}
