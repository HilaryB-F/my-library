import './DecorModal.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function PlantModal({ closePlantModal, setAdd }) {

  const [decor, setDecor] =useState([])

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
      <section className='decor-modal__container'>
        <header className="decor-modal__header">Decor</header>
        <section className="decor-modal__grid">
        {decor.map((decor)=>{
          return(
            <img className="decor-modal__decor" src={decor.image} alt="Decor" key={decor.id}/>
          )
        })}
        </section>
        </section>
    </main>
  )
}