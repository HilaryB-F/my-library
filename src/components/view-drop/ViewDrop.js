import "./ViewDrop.scss";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function ViewDrop({ book }) {


  return (
    <main className="drop-view__container">
      <Link to="/library" className="drop-view__text" onClick={() => {}}>
        Home
      </Link>
      <hr></hr>
      <h2
        
        className="drop-view__text"
        onClick={() => {
          book.map((unreadBooks)=>{
            if (unreadBooks.room === "Unread"){
              return console.log("unread")
            }
            return console.log("read")
          })
        }}
      >
        Unread
      </h2>
    </main>
  );
}
