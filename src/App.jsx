import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainSlide from "./components/MainSlide/MainSlide";
import Main from "./components/Main/Main";
import Board from "./components/Board/Board";

function App() {
  return (
    <>
      <Header />
      <MainSlide />
      <Main />
      <Board />
      <Footer />
    </>
  );
}

export default App;
