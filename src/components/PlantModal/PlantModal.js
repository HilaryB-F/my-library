import "./PlantModal.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function PlantModal({ setAdd, setShowMenu, getBooks }) {
  const [plant, setPlant] = useState([]);

  useEffect(() => {
    async function getPlant() {
      try {
        const { data } = await axios.get(URL + "/addPlants", {
        });
        setPlant(data);
      } catch (error) {
        console.log(error, "Error");
      }
    }
    getPlant();
  }, []);

  return (
    <main className="plant-modal__background">
      <section className="plant-modal__container">
        <header className="plant-modal__header">Plants</header>
        <section className="plant-modal__grid">
          {plant.map((plants) => {
            return (
              <img
                className="plant-modal__plant"
                src={plants.image}
                alt="Plant"
                key={plants.id}
                onClick={() => {
                  axios
                    .post(URL + "/library", {
                      image: `${plants.image}`
                    })
                    .then(getBooks)
                    .catch((error) => {
                      console.log(error, "Error");
                    });
                    
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
