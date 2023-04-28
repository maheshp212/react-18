import {Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Intro from "../intro/intro";
import Var from "../var/var";

function RouteSwitch(){
    return <main>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/intro" element={<Intro/>} />
      <Route path="/var" element={<Var/>} />
    </Routes>
  </main>
}
export default RouteSwitch;