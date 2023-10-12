import { createContext } from "react";
import Employee from "./employee/employee";

export const empContext = createContext();

function ContextProvider(){

    let emp = {id:12, name:'vishnu', age:23, country:'UK', salary: 100000}
    return (<div> ContextProvider
        <empContext.Provider value={emp}>
            <Employee></Employee>
        </empContext.Provider>
    </div>)
}
export default ContextProvider;