import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainComponent from './components/main/main';
import Menu from './components/menu/menu';
function App() {
  let name = "maheshssssssssssss";
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;


//Web Servers


//Production Servers
//Apache
//Tomcat
//WebSphere
//WebLogic
//Niginx
//OracleHttp


// dev servers (light weight)
// webpack dev server (recat / angular)
// lite server (once upon a time we were using this server)
// live server (you have some project which has to run on a server/ but project doesnt have server inside it, then we use it )
// node server (node js applicaitons , to see how the api's are working) Express JS
