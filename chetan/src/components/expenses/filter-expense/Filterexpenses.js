
import "./Filterexpenses.css"
function Filterexpenses(props){

   const filterHandler = (e) =>{
    props.onchangeFilter(e.target.value);
   }
    return <> 
          <label> Filter By Year </label>
          <select onChange={filterHandler}>
            <option value="all">All</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
    </>
}
export default Filterexpenses;