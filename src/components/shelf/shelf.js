import "./shelf.scss";
import Book from "../book/Book";
import UnreadBooks from "../unreadBooks/UnreadBooks";
import { useState } from "react";

export default function Shelf({book, bookId}) {
  const [active, setActive] = useState("All")

  return (
    <div>
      <button onClick={()=> setActive("All")}>All</button>
      <button onClick={()=> setActive("Unread")}>Unread</button>
      <section className="shelf">
        {active === "All" && <Book  book={book} bookId={bookId}/>}
        {active === "Unread" && <UnreadBooks  book={book} bookId={bookId}/>}
      </section>
    </div>
  );
}
