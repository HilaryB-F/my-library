import "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";
import Book from "../../assets/images/login-book.gif";

export default function Login() {
  return (
    <main className="login__container">
      <img className="login__img" src={Book} alt="Opening book gif" />
      <section className = "login__welcome">
        <h1 className = "login__title">My Library</h1>
        <p className="login__quote">
          “It's a dangerous business, Frodo, going out your door. You step onto
          the road, and if you don't keep your feet, there's no knowing where
          you might be swept off to.”
        </p>
        <p className ="login__author">-J.R.R. Tolkien</p>
        <Link className="login__link" to ="/library">Welcome</Link>
      </section>
    </main>
  );
}
