import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/Expenses";
function Main(){

    return( <main>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/var" element={<Var/>} />
            <Route path="/expenses" element={<Expenses/>} />

        </Routes>
      </main>)
}

export default Main