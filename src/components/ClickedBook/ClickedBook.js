import "./ClickedBook.scss";
import Decal from "../../assets/images/decal.png";
import Decal2 from "../../assets/images/decal2.png";
import BookDecal from "../../assets/images/bookDecal.gif";

export default function ClickedBook({ selectedBook }) {
  console.log(selectedBook.rating)
  return (
    <main className="clicked__background" key={selectedBook.id}>
      <section className="clicked__container">
        <img src={Decal} alt="Book decal" className="clicked__decal" />
        <h1 className="clicked__title">{selectedBook.title}</h1>
        <h2 className="clicked__author">By: {selectedBook.author}</h2>
        <h2 className="clicked__series">Series: {selectedBook.series}</h2>
        <img src={BookDecal} alt="Book decal" className="clicked__decal-main" />
        <h2 className="clicked__finished">Finished: {selectedBook.finished}</h2>
        <img src={Decal2} alt="Book decal" className="clicked__decal" />
      </section>
    </main>
  );
}
