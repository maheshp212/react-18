import logo from './logo.svg';
import './App.css';
import Headersss from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Headersss/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
