// import logo from './logo.svg';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
// import FilmFC from './components/Film/FilmFC';
import FooterFC from './components/Footer/FooterFC';
import IntroFC from './components/Intro/IntroFC';
import Main from './components/Main';
import NavigationFC from './components/Navigation/NavigationFC';

function App() {
  return (
    <div className="App">
      <NavigationFC/>
      <IntroFC/>
      <Main/>
      <FooterFC/>
    </div>
  );
}

export default App;
