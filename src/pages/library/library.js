import "./library.scss";
import Header from "../../components/header/header";
import Bookshelf from "../../components/bookshelf/bookshelf";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Library() {
  const [book, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);

  useEffect(() => {
    async function getNextBook() {
      try {
        const { data } = await axios.get(`http://localhost:8087/library`);
        setBook(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getNextBook();
  }, []);

  const { bookId } = useParams;
  let id = bookId;

  useEffect(() => {
    async function getSelectedBook() {
      try {
        const { data } = await axios.get(
          ` http://localhost:8087/library/${id}`
        );
        setSelectedBook(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getSelectedBook();
  }, [id]);

  return (
    <>
      <Header />
      <Bookshelf book={book} selectedBook={selectedBook} bookId={bookId} />
    </>
  );
}
