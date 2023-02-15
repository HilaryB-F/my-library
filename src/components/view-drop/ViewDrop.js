import "./ViewDrop.scss";

export default function ViewDrop({ setActive, setShowMenu }) {
  return (
    <main className="drop-view__container">
      <h2
        className="drop-view__text"
        onClick={() => {
          setActive("All");
          setShowMenu(false);
        }}
      >
        Home
      </h2>
      <hr></hr>
      <h2
        className="drop-view__text"
        onClick={() => {
          setActive("Unread");
          setShowMenu(false);
        }}
      >
        Unread
      </h2>
    </main>
  );
}
