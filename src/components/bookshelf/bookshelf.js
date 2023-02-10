import "./bookshelf.scss";
import Shelf from "../shelf/shelf";

export default function Bookshelf({book, bookId, active}) {
  return (
    <main className="main__container">
      <Shelf book ={book}  bookId={bookId} active={active}/>
    </main>
  );
}
