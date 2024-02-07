import { createContext } from "react";
import Employee from "./Employee"

export const empContext = createContext()
const ContextProvider = () =>{

    let emp  = [{id:34, name:'pss', location: 'hyd', salary:'70000'},
                {id:341, name:'pss2', location: 'hyd', salary:'70000'}];
    return <div>ContextProvider
        <empContext.Provider value={emp}>
            <Employee/>
        </empContext.Provider>
    </div>
}

export default ContextProvider