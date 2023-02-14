import "./header.scss";
import Menu from "../../assets/icons/menu.png";
import Dropdown from "../menu/menu";
import { useState, useRef, useEffect } from "react";
import ClickedBook from "../ClickedBook/ClickedBook";
import Close from "../../assets/icons/close.png";
import SearchIcon from "../../assets/icons/search.png";

export default function Header({
  book,
  setActive,
  active,
  setBookColor,
  getBooks,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [clickedBook, setClickedBook] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [searchEntered, setWordEntered] = useState("");

  const [filterSearch, setFilterSearch] = useState([]);

  const selectedBook = book.find((book) => book.id === selectedBookId);

  const menuRef = useRef();
  const searchRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShowMenu(false);
        setClickedBook(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = book.filter((value) => {
      if (!value.title) {
        return null;
      }
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterSearch([]);
    } else {
      setFilterSearch(newFilter);
    }
  };
  const clearSearch = () => {
    setFilterSearch([]);
    setWordEntered("");
  };
  return (
    <header className="header__container">
      {active === "All" && <h1 className="header__title">My Library</h1>}
      {active === "Unread" && <h1 className="header__title">Unread</h1>}
      <nav className="header__nav">
        {filterSearch.length === 0 ? (
          <img src={SearchIcon} alt="Search Icon" className="search__icon" />
        ) : (
          <img
            src={Close}
            alt="Close Icon"
            className="search__icon-close"
            onClick={clearSearch}
          />
        )}
        <input
          className="header__nav--search"
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
          ref={searchRef}
          value={searchEntered}
        />
        {filterSearch.length !== 0 && (
          <div className="search__container">
            {filterSearch.slice(0, 7).map((item) => {
              return (
                <h4
                  key={item.id}
                  className="search__text"
                  onClick={() => {
                    setClickedBook(!clickedBook);
                    setSelectedBookId(item.id);
                    setFilterSearch([]);
                    setWordEntered("");
                  }}
                >
                  {item.title}
                </h4>
              );
            })}
          </div>
        )}
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
      <div className={`clicked__book ${clickedBook ? "active" : "inactive"}`}>
        {clickedBook && (
          <ClickedBook
            selectedBook={selectedBook}
            getBooks={getBooks}
            clickedBook={setClickedBook}
          />
        )}
      </div>
    </header>
  );
}
