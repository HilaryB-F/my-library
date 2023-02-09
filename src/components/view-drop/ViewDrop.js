import "./ViewDrop.scss";
import { Link } from "react-router-dom";


import React from 'react'

export default function ViewDrop() {
  return (
    <main className="drop-view__container">
      <Link to="/library" className="drop-view__text"   onClick={() => {
        }}>Home</Link>
      <hr></hr>
      <Link to="/library/unread" className="drop-view__text"   onClick={() => {
        }}>Unread</Link>
    </main>
  )
}
