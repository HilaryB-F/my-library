import "./header.scss";
import Menu from "../../assets/icons/menu.png";

export default function Header() {


  return (
    <header className="header__container">
      <h1 className="header__title">My Library</h1>
      <nav className="header__nav">
        <input
          className="header__nav--search"
          type="search"
          placeholder="Search"
        ></input>
        <img className="header__nav--menu" src={Menu} alt="Menu" />
      </nav>
    </header>
  );
}
