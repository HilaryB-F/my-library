import "./menu.scss";
import { Link } from "react-router-dom";


export default function Menu() {
  return (
    <section className="dropdown__container">
      <Link className="dropdown__text" to="/library/addBook">Add</Link>
      <hr></hr>
      <h2 className="dropdown__text">Theme</h2>
      <hr></hr>
      <h2 className="dropdown__text">View</h2>
      <hr></hr>
      <Link className="dropdown__text" to="/library">Home</Link>
    </section>
  );
}
