import {Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Intro from "../intro/intro";
import Var from "../var/var";
import Expenses from "../expenses/expenses";
import Apis from "../apis/apis";

function RouteSwitch(){
    return <main>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/intro" element={<Intro/>} />
      <Route path="/var" element={<Var/>} />
      <Route path="/expenses" element={<Expenses/>} />
      <Route path="/apis" element={<Apis/>} />
    </Routes>
  </main>
}
export default RouteSwitch;