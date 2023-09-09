import './main.css';
import { Route, Routes } from 'react-router';
import Home from '../home/home';
import Intro from '../intro/intro';
import Variables from '../variables/variables';
import Expenses from '../expenses/expenses';
import Apis from '../apis/apis';

function Main(){
    return  <div className="container">
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/intro' element={<Intro/>}/>
      <Route path='/varrrrrrrrrrrrrr' element={<Variables/>}/>
      <Route path='/expenses' element={<Expenses/>}/>
      <Route path='/apis' element={<Apis/>}/>
    </Routes>
  </div>

}

export default Main;