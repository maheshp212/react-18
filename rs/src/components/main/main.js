import "./main.css";
import Apis from "../api/api";
import Form from "../forms/forms";
import Home from "../home/home";
import Redux from "../redux/redux";

const MainComponent = () =>{
    return <main className="main-container"> 

         <Apis/>
        <Form></Form>
      <Home/>
      <Redux></Redux>
    </main>
}
export default MainComponent;