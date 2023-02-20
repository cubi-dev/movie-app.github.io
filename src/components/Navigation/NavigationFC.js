
// _______________________________DŨNG___________________________________________
import React, { useContext } from "react";
import useRefMenu from "../Hooks/useRefMenu";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import "./Navigation.css";
export default function NavigationFC() {
  const { theme, toggle } = useContext(ThemeContext);
  const responseMenu = useRefMenu();
  return (
    <div>
      <nav
        className="navigation"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        {/* Đây là header*/}
        <div
          className="header-top"
          style={{
            backgroundColor: theme.backgroundColor,
          }}
        >
          <div className="container">
            <Link to={"/"}>
              <a
                href="index.html"
                className="header-logo"
                style={{ color: theme.color }}
              >
                B
              </a>
            </Link>
            <ul className="menu">
              <li className="menu-item">
                <Link to={"/movies"}>
                  <a
                    href="#!"
                    className="menu-link"
                    style={{ color: theme.color }}
                  >
                    News
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/category"}>
                  <a
                    href="#!"
                    className="menu-link"
                    style={{ color: theme.color }}
                  >
                    Category
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/news"}>
                  <a
                    href="#!"
                    className="menu-link"
                    style={{ color: theme.color }}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/plans"}>
                  <a
                    href="#!"
                    className="menu-link"
                    style={{ color: theme.color }}
                  >
                    Contact
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link to={"/login"}>
                  <a
                    href="#!"
                    className="menu-link header-button btn btn--border btn--rounded"
                    style={{ color: theme.color }}
                  >
                    Login
                  </a>
                </Link>
              </li>

              {/* __________SEARCH BAR____________________________
              <li className="menu-item">
                <input className="menu-link search-box__input" type="text">
                  button
                </input>
              </li> 
_____________________________________________________*/}
              {/* DARK/LIGHT MODE____________________________________________________ */}
              <div className="switch_nav">
                <a href="#!">
                  <label className="switch">
                    <input type="checkbox" />
                    <span
                      className="slider mode"
                      href="#switchmode"
                      onClick={toggle}
                      style={{
                        outline: "none",
                      }}
                      data-testid="toggle-theme-btn"
                    ></span>
                  </label>
                </a>
              </div>
              {/* _______________________________________________________________________ */}
            </ul>
            <button class="menu-toggle" ref={responseMenu}>
              <span
                class="line line-first"
                style={{
                  backgroundColor: theme.color,
                }}
              >
                {" "}
              </span>
              <span
                class="line line-second"
                style={{
                  backgroundColor: theme.color,
                }}
              >
                {" "}
              </span>
            </button>
          </div>
          <img
            srcSet="assets/images/header-line2.png "
            alt=""
            className="header-line"
          ></img>
        </div>
        <section
          className="banner"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }}
        >
          <div className="container">
            <h1 className="banner-heading">The film you need</h1>
            <p className="banner-desc">
              The film you need, designed by cubi for casestudy of FER201m to be
              accessible for Everyone!
            </p>
            <div className="banner-buttons">
              <a
                href="#!"
                className="btn btn--border btn--rounded"
                style={{ color: theme.color }}
              >
                Explore
              </a>
              <a
                href="#!"
                className="btn btn--primary btn--rounded has-shadow"
                style={{ color: theme.color }}
              >
                Buy Plans
              </a>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
// _____________________________________________________________________________________






