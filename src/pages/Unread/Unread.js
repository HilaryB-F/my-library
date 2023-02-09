import "./Unread.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/header";
import UnreadBookshelf from "../../components/unreadBookshelf/UnreadBookshelf";

export default function Unread() {
  const [unreadBook, setUnreadBook] = useState([]);

  const { unreadBookId } = useParams();

  async function getUnread() {
    try {
      const { data } = await axios.get(`http://localhost:8080/library`);
      setUnreadBook(data);
    } catch (error) {
      console.log(error, "Error");
    }
  }
  useEffect(() => {
    getUnread();
  }, []);

  console.log(unreadBook);
  return (
    <div>
      <Header />
      <UnreadBookshelf unread={unreadBook} unreadBookId={unreadBookId} />
    </div>
  );
}
