// import logo from './logo.svg';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoryFC from "./components/Category/CategoryFC";
import ContactFC from "./components/Contact/ContactFC";
import Detail from "./components/Detail/DetailFC";
import FilmFC from "./components/Film/FilmFC";
import FooterFC from "./components/Footer/FooterFC";
import IntroFC from "./components/Intro/IntroFC";
// import Main from './components/Main';
import NavigationFC from "./components/Navigation/NavigationFC";
// import { Button } from "@material-ui/core";
function App() {
  return (
    <div className="App">
      <NavigationFC />
      {/* <IntroFC/> */}
      <Routes>
        {/* <Route path="/" element={<IntroFC />}></Route> */}
        <Route path="/" element={<FilmFC />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/category" element={<CategoryFC />}></Route>
        <Route path="/contact" element={<ContactFC/>}></Route>
        {/* <Main/> */}
      </Routes>
      <FooterFC />
    </div>
  );
}

export default App;
