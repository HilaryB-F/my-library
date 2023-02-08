import "./shelf.scss";
import Book from "../book/Book";

export default function Shelf({book, bookId}) {

  return (
    <div>
      <section className="shelf">
        <Book  book={book} bookId={bookId}/>
      </section>
    </div>
  );
}
