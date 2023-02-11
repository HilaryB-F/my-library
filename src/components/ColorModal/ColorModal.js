import './ColorModal.scss';

import React from 'react'

export default function ColorModal({setColorValue, setOpenColor}) {
  return (
    <main className='color-modal__container'>
      <h2 className='color-modal__text'  onClick={()=>{
        setColorValue("Leather"); setOpenColor(false)
      }}>Leather</h2>
      <h2 className='color-modal__text'  onClick={()=>{
        setColorValue("Purple"); setOpenColor(false)
      }}>Purple</h2>
      <h2 className='color-modal__text'  onClick={()=>{
        setColorValue("Pink"); setOpenColor(false)
      }}>Pink</h2>
      <h2 className='color-modal__text'  onClick={()=>{
        setColorValue("Blue"); setOpenColor(false)
      }}>Blue</h2>
      <h2 className='color-modal__text color-modal__text-bottom' onClick={()=>{
        setColorValue("Turquoise"); setOpenColor(false)
      }} >Turquoise</h2>
    </main>
  )
}
