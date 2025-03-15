import { useContext } from "react";
import { empContext } from "./context";

function Salary(){
    const context = useContext(empContext)

    return( <div> Salary component <br/><br/>
    
    ID1 :: {context[0].name} -- {context[0].salary}<br/>
    ID2 :: {context[1].name} -- {context[1].salary}<br/>
    </div>)
}

export default Salary;