import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/Expenses";
import Apis from "../apis/Apis";
import ContextProvider from "../context-provider/ContextProvider";
import Bootstrap from "../bootstrap/bootstrap";
import Redux from "../redux/redux";
import NotFound from "../notfound/NotFound";

const Main = () =>{

    return <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/intro" element={<Intro/>}/>
      <Route path="/variablesss" element={<Var/>}/>
      <Route path="/expenses" element={<Expenses/>}/>
      <Route path="/apis" element={<Apis/>}/>
      <Route path="/context" element={<ContextProvider/>}/>
      <Route path="/boot" element={<Bootstrap/>}/>
      <Route path="/redux" element={<Redux/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </main>
}
export default Main;