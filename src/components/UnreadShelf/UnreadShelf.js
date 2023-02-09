import "./UnreadShelf.scss";
import UnreadBooks from "../unreadBooks/UnreadBooks";

export default function Shelf({unread, unreadBookId}) {

  return (
    <div>
      <section className="shelf">
        <UnreadBooks  unread={unread} unreadBookId={unreadBookId} />
      </section>
    </div>
  );
}
