const ExpenseFilter = (props) => {
    const dropDownChangeHandler = (event) =>{
        props.onchangeFilter(event.target.value);
    }
    return (<div>
        <label> Filter by Year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
        </select>
    </div>)
}
export default  ExpenseFilter;
