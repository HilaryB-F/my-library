import "./PlantModal.scss";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlantModal({ closePlantModal, setAdd }) {
  const [plant, setPlant] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlant() {
      try {
        const { data } = await axios.get(`http://localhost:8080/addPlants`);
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
                    .post("http://localhost:8080/library", {
                      image: `${plants.image}`,
                    })
                    .catch((error) => {
                      console.log(error, "Error");
                    });
                  navigate("/library");
                  setAdd(false);
                  console.log(`${plants.image}`);
                }}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}
