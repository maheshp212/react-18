import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main />
      <Footer />
    </>
  );
}

export default App;
