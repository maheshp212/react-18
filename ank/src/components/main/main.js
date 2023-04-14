import { Route, Routes } from 'react-router-dom';
import Expenses from '../expenses/expenses';
import Home from '../home/home';
import Intro from '../intro/intro';
import Variables from '../variables/variables';
import Notfound from '../not-found/not-found';
import './main.css';
import Apis from '../apis/apis';
import User from '../apis/users';
import Contextprovider from '../context-provider/context-provider';
import Redux from '../redux/redux';
function Main(){
    return(<main>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/var" element={<Variables/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/apis" element={<Apis/>} />
            <Route path="/user/:userId" element={<User/>} />
            <Route path="/context-provider" element={<Contextprovider/>} />
            <Route path="/redux" element={<Redux/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
      </main>)
}
export default Main;