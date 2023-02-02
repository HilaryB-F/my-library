import "./shelf.scss";
import Book from "../book/Book";
import AddBook from "../AddBook/AddBook";

export default function shelf() {
  return (
    <div>
      <section className="main__shelf">
        <Book />
        <Book /> <AddBook />
        <Book /> <AddBook />
        <Book />
        <Book /> <AddBook />
        <Book />
        <Book /> <AddBook />
        <Book />
        <AddBook /> <AddBook />
        <Book />
        <Book />
        <Book /> <AddBook />
        <Book />
        <Book />
      </section>
    </div>
  );
}
