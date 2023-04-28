import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/menu";
import RouteSwitch from "./components/route-switch/route-switch";

function App() {
  return (
    <div>
      <header>
        <h2> Welcome to Application</h2>
      </header>
      <Menu/>
      <RouteSwitch/>
      <footer> &copy; 2023, Gowri Inc., </footer>
    </div>
  );
}

export default App;
