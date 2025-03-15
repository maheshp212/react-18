import { useContext } from "react";
import Salary from "./salary";
import { empContext } from "./context";

function Employee(){
    let context = useContext(empContext)

    return( <div> Employee component
        <br/><br/><br/>
        ID1 :: {context[0].name}<br/><br/>
        ID2 :: {context[1].name}<br/><br/>
        <Salary/>
        
         </div>)
}

export default Employee;