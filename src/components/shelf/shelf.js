import "./shelf.scss";
import Book from "../book/Book";
import UnreadBooks from "../unreadBooks/UnreadBooks";


export default function Shelf({ book, bookId, active }) {
  
  return (
    <div>

      <section className="shelf">
        {active === "All" && <Book book={book} bookId={bookId} />}
        {active === "Unread" && <UnreadBooks book={book} bookId={bookId} />}
      </section>
    </div>
  );
}
