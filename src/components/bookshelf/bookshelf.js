import "./bookshelf.scss";
import Shelf from "../shelf/shelf";

export default function Bookshelf({book, bookId}) {
  return (
    <main className="main__container">
      <Shelf book ={book}  bookId={bookId}/>
      {/* <Shelf book ={book} selectedBook={selectedBook} bookId={bookId}/>
      <Shelf book ={book} selectedBook={selectedBook} bookId={bookId}/>
      <Shelf book ={book} selectedBook={selectedBook} bookId={bookId}/>
      <Shelf book ={book} selectedBook={selectedBook} bookId={bookId} />
      <Shelf book ={book} selectedBook={selectedBook} bookId={bookId}/> */}
    </main>
  );
}
