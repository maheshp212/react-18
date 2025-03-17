import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "../home/Home";
import Intro from "../intro/Intro";
import Var from "../var/Var";
import Expenses from "../expenses/Expenses";
import Apis from "../apis/apis";
import Notfound from "../not-found/not-found";
import Urls from "../urls/urls";
import Urls2 from "../urls2/urls2";
import Context from "../context/context";
import Redux from "../redux/redux";
import Memo from "../hooks/memo";
import Reducer from "../hooks/reducer";
import Ref from "../hooks/ref";
function Main(){

    return( <main>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/intro" element={<Intro/>} />
            <Route path="/var" element={<Var/>} />
            <Route path="/expenses" element={<Expenses/>} />
            <Route path="/apis" element={<Apis/>} />
            <Route path="/:names/p/:id" element={<Urls/>} />
            <Route path="/buy-used-cars/:city/:brand/:model/:typeAreaYear/:id" element={<Urls2/>} />
            <Route path="/context" element={<Context/>} />
            <Route path="/redux" element={<Redux/>} />
            <Route path="/memo" element={<Memo/>} />
            <Route path="/reducer" element={<Reducer/>} />
            <Route path="/ref" element={<Ref/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
      </main>)
}

export default Main