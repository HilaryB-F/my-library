import "./header.scss";
import { useState, useEffect, useRef } from "react";
import Menu from "../../assets/icons/menu.png";
import Dropdown from "../menu/menu";

export default function Header() {
  const [menu, setMenu] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <header className="header__container">
      <h1 className="header__title">My Library</h1>
      <nav className="header__nav">
        <input
          className="header__nav--search"
          type="search"
          placeholder="Search"
        ></input>{" "}
        <section className="menu__container" ref={menuRef}>
          <div
            className="menu__trigger"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <img className="header__nav--menu" src={Menu} alt="Menu" />
          </div>
          <div className={`menu__dropdown ${menu ? "active" : "inactive"}`}>
            <Dropdown />
          </div>
        </section>
      </nav>
    </header>
  );
}
