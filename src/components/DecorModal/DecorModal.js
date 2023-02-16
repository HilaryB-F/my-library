import "./DecorModal.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
  const REACT_APP_URL = process.env.REACT_APP_URL



export default function PlantModal({ setAdd, setShowMenu, getBooks }) {
  const [decor, setDecor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getDecor() {
      try {
        const { data } = await axios.get(REACT_APP_URL +"/addDecor");
        setDecor(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getDecor();
  }, []);

  return (
    <main className="decor-modal__background">
      <section className="decor-modal__container">
        <header className="decor-modal__header">Decor</header>
        <section className="decor-modal__grid">
          {decor.map((decor) => {
            return (
              <img
                className="decor-modal__decor"
                src={decor.image}
                alt="Decor"
                key={decor.id}
                onClick={() => {
                  axios
                    .post(REACT_APP_URL + "/library", {
                      image: `${decor.image}`,
                    })
                    .then(getBooks)
                    .catch((error) => {
                      console.log(error, "Error");
                    });
                  navigate("/library");
                  setAdd(false);
                  setShowMenu(false);
                }}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}
