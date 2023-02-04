import "./main.css";
import Apis from "../api/api";
import Form from "../forms/forms";
import Home from "../home/home";
import Redux from "../redux/redux";
import { Route, Routes } from "react-router-dom";
import Expenses from "../expenses/expenses";
import Landing from "../landing/landing";
import NotFound from "../notfound/notfound";
/** Switch became Routes from react router dom V6 */

const MainComponent = () => {
  return (
    <main className="main-container">
      {/* <Switch>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/forms">
          <Form />
        </Route>
        <Route path="/apis">
          <Apis />
        </Route>
        <Route path="/redux">
          <Redux />
        </Route>
      </Switch> */}

      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/forms" element={<Form/>}/>
        <Route path="/api" element={<Apis/>}/>
        <Route path="/redux" element={<Redux/>}/>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </main>
  );
};
export default MainComponent;
