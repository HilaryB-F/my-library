import "./bookshelf.scss";
import Shelf from "../shelf/shelf";

export default function Bookshelf({ book, bookId, active, getBooks }) {
  return (
    <main className="main__container">
      <Shelf book={book} bookId={bookId} active={active} getBooks={getBooks} />
    </main>
  );
}
