import "./library.scss";
import Header from "../../components/header/header";
import Bookshelf from "../../components/bookshelf/bookshelf";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Library() {
  const [book, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);

  const { bookId } = useParams();
  let id = bookId ||"1"

  useEffect(() => {
    async function getSelectedBook() {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/library/${id}`
        );
        setSelectedBook(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getSelectedBook();
  }, [id])


  useEffect(() => {
    async function getNextBook() {
      try {
        const { data } = await axios.get(`http://localhost:8080/library`);
        setBook(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getNextBook();
  }, []);



 
// console.log(selectedBook.title)
  return (
    <>
      <Header />
      <Bookshelf book={book} selectedBook={selectedBook} bookId = {bookId}/>
    </>
  );
}
