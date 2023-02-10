import './NotFound.scss';
import Loading from "../../assets/images/loading.gif"

export default function NotFound() {
  return (
    <main className="loading__container">
    <section className = "loading__welcome">
      <h1 className = "loading__title">Loading...</h1>
      <p className="loading__text">Please wait while we find your page</p>
    </section>
    <img className="loading__img" src={Loading} alt="Opening book gif" />
  </main>
  )
}
