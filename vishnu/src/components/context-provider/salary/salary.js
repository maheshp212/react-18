import { useContext } from "react";
import { empContext } from "../context-provider";

function Salary(){
    let context =  useContext(empContext);
    return <div>Salary :: {context.salary}</div>
}
export default Salary