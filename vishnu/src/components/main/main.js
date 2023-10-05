
import {  Route, Routes } from "react-router-dom"
import "./main.css"
import Home from "../home/home"
import Intro from "../intro/intro"
import Var from "../var/var"
import Notfound from "../notfound/notfound"
import Expenses from "../expenses/expenses"
import Apis from "../apis/apis"
import Dynamic from "../dynamic/dynamic"
function Main(){

    return (<main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="intro/:name/:id" element={<Intro/>} />
            <Route path=":pname/p/:pid" element={<Dynamic/>} />
            <Route path="var" element={<Var/>} />
            <Route path="expenses" element={<Expenses/>} />
            <Route path="apis" element={<Apis/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
    </main>)
}
export default Main