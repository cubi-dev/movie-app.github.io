import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../shared/ListOfFilm";
import { ThemeContext } from "../ThemeContext";
import "./Detail.css";
export default function Detail() {
  const { theme } = useContext(ThemeContext);
  const userName = useParams();
  const film = data.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <section className="detail"
    style={{
      backgroundColor: theme.backgroundColor,
    }}>
      <div
        className="container"
        style={{
          backgroundColor: theme.backgroundColor,
        }}
      >
        <div className="intro">
          <div className="container">
            <div className="intro-first">
              <div className="intro-overlay">
                <video
                  className="intro-video"
                  autoPlay
                  muted
                  src={`../${film.trailer}`}
                ></video>
              </div>
              <div className="intro-info">
                <h1>{film.name}</h1>
                <p>{film.info}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card">
          {/* <div className="film-name">{film.name}</div> */}
          <div className="product-tumb">
            <img src={`../${film.img}`} alt="" />
          </div>
          <div className="product-details">
            <h4>{film.info}</h4>
            <div className="product-price">{film.release}</div>
            <p>{film.director}</p>
            <div className="product-bottom-details"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
