// import React from 'react'
// import { makeStyles, AppBar, Toolbar, CssBaseline, Typography } from '@material-ui/core'
// import { Link } from 'react-router-dom';
// import { grey } from '@material-ui/core/colors';
// const useStyles = makeStyles((theme) => ({
//   AppBar : {
//   },
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//  logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "black",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));
// export default function NavigationFC() {
//   const classes = useStyles();
//   return (
//     <AppBar position="static" color='grey'>
//       <CssBaseline />
//       <Toolbar>
//         <Typography variant="h4" className={classes.logo}>
//           Navbar
//         </Typography>
//           <div className={classes.navlinks}>
//             <Link to="/" className={classes.link}>
//               Home
//             </Link>
//             <Link to="/about" className={classes.link}>
//               About
//             </Link>
//             <Link to="/contact" className={classes.link}>
//               Contact
//             </Link>
//             <Link to="/faq" className={classes.link}>
//               FAQ
//             </Link>
//           </div>
//       </Toolbar>
//     </AppBar>
//   )
// }






import React, { useContext } from "react";
import useRefMenu from "../Hooks/useRefMenu";
import { ThemeContext } from "../ThemeContext";
import "./Navigation.css";
export default function NavigationFC() {
  const {theme, toggle} = useContext(ThemeContext);
  const responseMenu = useRefMenu();
  return (
    <div>
      <nav className="navigation" 
      style={{
        backgroundColor: theme.backgroundColor,  color: theme.color 
      }}>
        {/* Đây là header*/}
        <div
          className="header-top"
          style={{
            backgroundColor: theme.backgroundColor,
          }}
        >
          <div className="container">
            <a
              href="index.html"
              className="header-logo"
              style={{ color: theme.color }}
            >
              B
            </a>
            <ul className="menu">
              <li className="menu-item">
<<<<<<< HEAD
                <Link to={"/movies"}>
                  <a
                    href="#!"
                    className="menu-link"
                    style={{ color: theme.color }}
                  >
                    News
                  </a>
                </Link>
=======
                <a
                  href="#!"
                  className="menu-link"
                  style={{ color: theme.color }}
                >
                  Movies
                </a>
>>>>>>> parent of eacd76b (update)
              </li>
              <li className="menu-item">
                <a
                  href="#!"
                  className="menu-link"
                  style={{ color: theme.color }}
                >
                  Category
                </a>
              </li>
              <li className="menu-item">
<<<<<<< HEAD
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
=======
                <a
                  href="#!"
                  className="menu-link"
                  style={{ color: theme.color }}
                >
                  News
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="#!"
                  className="menu-link"
                  style={{ color: theme.color }}
                >
                  Plans
                </a>
>>>>>>> parent of eacd76b (update)
              </li>
              <li className="menu-item">
                <a
                  href="#!"
                  className="menu-link header-button btn btn--border btn--rounded"
                  style={{ color: theme.color }}
                >
                  Login
                </a>
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
              <span class="line line-first" style={{
            backgroundColor: theme.color,
          }}> </span>
              <span class="line line-second" style={{
            backgroundColor: theme.color,
          }}> </span>

            </button>
          </div>
          <img srcSet="assets/images/header-line2.png " alt="" className="header-line"></img>
        </div>
        <section
          className="banner"
          style={{
            backgroundColor: theme.backgroundColor,  color: theme.color 
          }}
        >
          <div className="container">
            <h1 className="banner-heading">The film you need</h1>
            <p className="banner-desc">
              The film you need, designed by cubi for casestudy of FER201m to be
              accessible for Everyone!
            </p>
            <div className="banner-buttons">
              <a href="#!" className="btn btn--border btn--rounded"
              style={{ color: theme.color }}>
                Explore
              </a>
              <a href="#!" className="btn btn--primary btn--rounded has-shadow"
              style={{ color: theme.color }}>
                Buy Plans
              </a>
            </div>
          </div>
        </section>
      </nav>
    </div>
  );
}
