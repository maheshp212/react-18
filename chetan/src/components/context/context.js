import { createContext } from "react";
import Employee from "./employee";

export const empContext = createContext();
function Context() {
  let emp = [
    { id: 123, name: "chetan", salary: 3000000 },
    { id: 124, name: "rohan", salary: 5000000 },
  ];
  return (
    <>
      <empContext.Provider value={emp}>
        <div>Context component</div>
        <Employee/>
      </empContext.Provider>
    </>
  );
}

export default Context;
