import "./DecorModal.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function PlantModal({ closePlantModal, setAdd }) {
  const [decor, setDecor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getDecor() {
      try {
        const { data } = await axios.get(`http://localhost:8080/addDecor`);
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
                    .post("http://localhost:8080/library", {
                      image: `${decor.image}`,
                    })
                    .catch((error) => {
                      console.log(error, "Error");
                    });
                  navigate("/library");
                  setAdd(false);
                  console.log(`${decor.image}`);
                }}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}
