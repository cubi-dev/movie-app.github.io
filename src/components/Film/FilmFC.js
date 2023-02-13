import React, { useContext, useState } from "react";
import "./Film.css";
import { ThemeContext } from "../ThemeContext";
// import { Films } from "../../shared/ListOfFilm";
export default function FilmFC({ films }) {
  const {theme} = useContext(ThemeContext);
  const [film, setFilm] = useState([]);
  return (
    <section
      className="film"
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      <h3 className="film-heading"
      style={{ color: theme.color }}
      >Recommend for you</h3>
      <div className="container"
      style={{
        borderBottom: theme.borderBottom,
      }}
      >
        {films.map((film) => (
          <div className="film-column" key={film.id}>
            <div className="film-card">
              <img src={film.img} alt="" className="film-image" />
              <h3 className="film-name">{film.name}</h3>
              <p className="film-release">{film.release}</p>
              <p className="film-detail">
                <button
                  onClick={() => {
                    setFilm(film);
                  }}
                >
                  <a href="#popup1" id="openPopUp">
                    Detail <i class="fa-solid fa-angle-right"></i>
                  </a>
                </button>
              </p>
            </div>
          </div>
        ))}
        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="popup-close" href="#!">
              &times;
            </a>
            <div className="popup-img">
            <video
                className="popup-video"
                autoPlay
                muted
                src={film.trailer}
              ></video>
            </div>
            <div className="pop-up detail">
              <h2 className="film-name">{film.name}</h2>
              <h3 className="film-release">{film.release}</h3>
              <div className="popup-content">{film.info}</div>
              <button className="popup-watch">Play</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
