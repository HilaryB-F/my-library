import "./bookshelf.scss";
import Shelf from "../shelf/shelf";

export default function Bookshelf() {
  return (
    <main className="main__container">
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
      <Shelf />
    </main>
  );
}
