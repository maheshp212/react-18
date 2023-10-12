import { useContext } from "react";
import Salary from "../salary/salary";
import { empContext } from "../context-provider";

function Employee(){

    let emp =  useContext(empContext);
    return <div>Employee <br/><br/>
        ID:: {emp.id} <br/>
        NAME:: {emp.name} <br/> <br/>
        AGE:: {emp.age} <br/> <br/>
        COUNTRY:: {emp.country} <br/> <br/>
        <Salary/>
    </div>
}
export default Employee;