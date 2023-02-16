import "./library.scss";
import Header from "../../components/header/header";
import Bookshelf from "../../components/bookshelf/bookshelf";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const REACT_APP_URL = process.env.REACT_APP_URL


export default function Library() {
  const [book, setBook] = useState([]);
  const [active, setActive] = useState("All");
 

  const { bookId } = useParams();

  async function getNextBook() {
    try {
      const { data } = await axios.get(REACT_APP_URL);
      setBook(data);
    } catch (error) {
      console.log(error, "Error");
    }
  }

  useEffect(() => {
    getNextBook();
  }, []);


  return (
    <main className="library">
      <Header book={book} getBooks={getNextBook} setActive ={setActive} active={active} />
      <Bookshelf book={book} bookId={bookId} active={active} getBooks={getNextBook}/>
    </main>
  );
}
