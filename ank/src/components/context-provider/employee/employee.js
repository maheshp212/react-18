import { useContext } from "react";
import Salary from "../salary/salary";
import { employeeContext } from "../context-provider";

function Employee (){
    let context = useContext(employeeContext);
    return <div> im Employee <br/><br/>
        ID : {context.id} <br/>
        Name : {context.name} <br/>
        location : {context.location} <br/> <br/>
        <Salary/>
    </div>
}
export default Employee;