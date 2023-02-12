import "./shelf.scss";
import Book from "../book/Book";
import UnreadBooks from "../unreadBooks/UnreadBooks";


export default function Shelf({ book, bookId, active,bookColor, getBooks }) {
  
  return (
    <div>

      <section className="shelf">
        {active === "All" && <Book book={book} bookId={bookId}  bookColor={bookColor} getBooks={getBooks}/>}
        {active === "Unread" && <UnreadBooks book={book} bookId={bookId}  bookColor={bookColor} getBooks={getBooks}/>}
      </section>
    </div>
  );
}
