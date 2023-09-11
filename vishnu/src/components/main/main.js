
import {  Route, Routes } from "react-router-dom"
import "./main.css"
import Home from "../home/home"
import Intro from "../intro/intro"
import Var from "../var/var"
import Notfound from "../notfound/notfound"
function Main(){

    return (<main>
        <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="intro" element={<Intro/>} />
            <Route path="var" element={<Var/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
    </main>)
}
export default Main