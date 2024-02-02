import { useState } from "react";
import "./Expensefilter.css";

const  Expensefilter = (props) =>{
    const [name, setName] = useState('');
    const filterHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }
    const nameHandler = (e) =>{
        setName(e.target.value)
        props.filterName(e.target.value);
    }
 return <div>
    <label> Filter by Year</label>
    <select onChange={filterHandler}>
        <option value="all">All</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
    </select>
    <input type="text" value={name} onChange={nameHandler} />
 </div>
}

export default Expensefilter;