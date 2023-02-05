import "./ClickedBook.scss";
import Decal from "../../assets/images/decal.png";
import Decal2 from "../../assets/images/decal2.png";
import BookDecal from "../../assets/images/bookDecal.gif";

export default function ClickedBook() {
  return (
    <main className="clicked__background">
      <section className="clicked__container">
        <img src={Decal} alt="Book decal" className="clicked__decal" />
        <h1 className="clicked__title">Kingdom of Ash</h1>
        <h2 className="clicked__author">By: Sarah J Maas</h2>
        <h2 className="clicked__series">Series: Throne of Glass</h2>
        <img src={BookDecal} alt="Book decal" className="clicked__decal-main" />
        <h2 className="clicked__finished">Finished: 10/23/2018</h2>
        <img src={Decal2} alt="Book decal" className="clicked__decal" />
      </section>
    </main>
  );
}
