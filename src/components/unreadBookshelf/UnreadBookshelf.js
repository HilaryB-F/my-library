import "./UnreadBookshelf.scss";
import UnreadShelf from "../../components/UnreadShelf/UnreadShelf";

export default function Bookshelf({unread, unreadBookId}) {
  return (
    <main className="main__container">
      <UnreadShelf unread={unread} unreadBookId={unreadBookId} />
    </main>
  );
}
