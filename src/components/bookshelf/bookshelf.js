import "./bookshelf.scss";
import Shelf from "../shelf/shelf";

export default function Bookshelf({book, selectedBook, bookId}) {
  return (
    <main className="main__container">
      <Shelf book ={book} selectedBook={selectedBook} bookId={bookId}/>
      {/* <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf /> */}
    </main>
  );
}
