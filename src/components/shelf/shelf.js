import "./shelf.scss";
import Book from "../book/Book";
import UnreadBooks from "../unreadBooks/UnreadBooks";
import { useRef } from "react";

export default function Shelf({
  book,
  bookId,
  active,
  bookColor,
  getBooks,
  searchBook,
}) {
  let addRef = useRef();

  return (
    <div>
      <section className="shelf">
        {active === "All" && (
          <Book
            book={book}
            bookId={bookId}
            bookColor={bookColor}
            getBooks={getBooks}
            addRef={addRef}
            searchBook={searchBook}
          />
        )}
        {active === "Unread" && (
          <UnreadBooks
            book={book}
            bookId={bookId}
            bookColor={bookColor}
            getBooks={getBooks}
            searchBook={searchBook}
          />
        )}
      </section>
    </div>
  );
}
