import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
     <Header/>
     <Menu/>
     <Main/>
     <Footer/>
    </>
  );
}

export default App;
