import { useContext } from "react";
import { empContext } from "./ContextProvider";

const Salary = () => {
    let context = useContext(empContext)
    return <div> Salary: {context.salary}</div>
}
export default Salary;