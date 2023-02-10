import "./ClickedBook.scss";
import Decal from "../../assets/images/decal.png";
import Decal2 from "../../assets/images/decal2.png";
import BookDecal from "../../assets/images/bookDecal.gif";
import { FaHeart } from "react-icons/fa";

export default function ClickedBook({ selectedBook }) {


    const noNum = selectedBook.order
    if(!noNum){

  return (
    <main className="clicked__background" key={selectedBook.id}>
      <section className="clicked__container">
        <img src={Decal} alt="Book decal" className="clicked__decal-top" />
        <h1 className="clicked__title">{selectedBook.title}</h1>
        <h2 className="clicked__author">{selectedBook.author}</h2>
        <h2 className="clicked__series">{selectedBook.series}</h2>
        <div className="clicked__rate">
          {[...Array(5)].map((heart, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  className="clicked__radio"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                />
                <FaHeart
                  className="clicked__hearts"
                  size={40}
                  color={selectedBook.rating >= (ratingValue) ? "#F84B4B" : "#4B1F19" }
                />
              </label>
            );
          })}
        </div>
        <img src={BookDecal} alt="Book decal" className="clicked__decal-main" />
        <h2 className="clicked__finished">Finished: {selectedBook.finished}</h2>
        <img src={Decal2} alt="Book decal" className="clicked__decal-bottom" />
      </section>
    </main>
  )}
  else{
    return (
      <main className="clicked__background" key={selectedBook.id}>
        <section className="clicked__container">
          <img src={Decal} alt="Book decal" className="clicked__decal-top" />
          <h1 className="clicked__title">{selectedBook.title}</h1>
          <h2 className="clicked__series">{selectedBook.series}: Book {selectedBook.order}</h2>
          <h2 className="clicked__author">{selectedBook.author}</h2>
       
          <div className="clicked__rate">
            {[...Array(5)].map((heart, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    className="clicked__radio"
                    type="radio"
                    name="rating"
                    value={ratingValue}
                  />
                  <FaHeart
                    className="clicked__hearts"
                    size={40}
                    color={selectedBook.rating >= (ratingValue) ? "#F84B4B" : "#4B1F19" }
                  />
                </label>
              );
            })}
          </div>
          <img src={BookDecal} alt="Book decal" className="clicked__decal-main" />
          <h2 className="clicked__finished">Finished: {selectedBook.finished}</h2>
          <img src={Decal2} alt="Book decal" className="clicked__decal-bottom" />
        </section>
      </main>
    )
  }
}
