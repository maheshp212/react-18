import { createContext } from "react";
import Employee from "./employee/employee";

export const employeeContext = createContext();
function Contextprovider (){

    let emp = { id : 23, name:'ank', location: 'india', salary:'70000'}

    return <div> im context provider
        <employeeContext.Provider value={emp}>
            <Employee/>
        </employeeContext.Provider>
        
    </div>
}
export default Contextprovider;