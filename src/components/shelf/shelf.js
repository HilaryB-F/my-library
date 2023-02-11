import "./shelf.scss";
import Book from "../book/Book";
import UnreadBooks from "../unreadBooks/UnreadBooks";


export default function Shelf({ book, bookId, active,bookColor }) {
  
  return (
    <div>

      <section className="shelf">
        {active === "All" && <Book book={book} bookId={bookId}  bookColor={bookColor} />}
        {active === "Unread" && <UnreadBooks book={book} bookId={bookId}  bookColor={bookColor} />}
      </section>
    </div>
  );
}
