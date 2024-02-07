import { useContext } from "react";
import Salary from "./Salary";
import { empContext } from "./ContextProvider";


const Employee = () =>{
    let context = useContext(empContext)
    return <div>
        Employee Details :: <br/><br/><br/>
ID : {context[0].id} <br/>
ID : {context[1].id} <br/>
        {/* Name: {context.name} <br/> */}
        {/* Location: {context.location} <br/><br/><br/>   */}
        
        <Salary/>
        </div>
}
export default Employee;