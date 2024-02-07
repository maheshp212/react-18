import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/Expenses";
import Apis from "../apis/Apis";
import ContextProvider from "../context-provider/ContextProvider";

const Main = () =>{

    return <main>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/intro" element={<Intro/>}/>
      <Route path="/variablesss" element={<Var/>}/>
      <Route path="/expenses" element={<Expenses/>}/>
      <Route path="/apis" element={<Apis/>}/>
      <Route path="/context" element={<ContextProvider/>}/>
    </Routes>
  </main>
}
export default Main;