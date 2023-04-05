import { Route, Routes } from 'react-router-dom';
import Expenses from '../expenses/expenses';
import Home from '../home/home';
import Intro from '../intro/intro';
import Variables from '../variables/variables';
import './main.css';
import Apis from '../apis/apis';
function Main(){
    return(<main>

        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/var" element={<Variables/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/apis" element={<Apis/>} />
        </Routes>
      </main>)
}
export default Main;