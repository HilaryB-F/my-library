import "./shelf.scss";
import Book from "../book/Book";

export default function Shelf({book, selectedBook, bookId}) {

  return (
    <div>
      <section className="main__shelf">
        <Book  book={book} selectedBook={selectedBook} bookId={bookId}/>
      </section>
    </div>
  );
}
