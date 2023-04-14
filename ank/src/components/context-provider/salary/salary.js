import { useContext } from "react";
import { employeeContext } from "../context-provider";

function Salary(){

    let context = useContext(employeeContext);
    return <div> im salary: {context.salary}</div>

}

export default  Salary; 