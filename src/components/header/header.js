import "./header.scss";
import Menu from "../../assets/icons/menu.png";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!open);
  }
  
  const menuPop = () => {
    return (
      <main>
        <h2>Theme</h2>
        <h2>View</h2>
      </main>
    );
  };

  return (
    <header className="header__container">
      <h1 className="header__title">My Library</h1>
      <nav className="header__nav">
        <input
          className="header__nav--search"
          type="search"
          placeholder="Search"
        ></input>
        <img className="header__nav--menu" src={Menu} alt="Menu" onClick={togglePopup} />
      </nav>
    </header>
  );
}
