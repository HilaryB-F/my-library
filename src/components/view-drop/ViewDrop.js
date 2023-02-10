import "./ViewDrop.scss";


export default function ViewDrop({ book, setActive }) {


  return (
    <main className="drop-view__container">
      <h2  className="drop-view__text" onClick={() => {setActive("All")}}>
        Home
      </h2>
      <hr></hr>
      <h2
        
        className="drop-view__text"
        onClick={() => {
          setActive("Unread")
        }}
      >
        Unread
      </h2>
    </main>
  );
}
