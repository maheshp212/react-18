const ExpenseFilter = (props)=>{
    const filterHandler = (event)=>{
        props.onChangeFilter(event.target.value);
    }
    return(<div>
        <label> filter by Years</label>
        <select onChange={(evt) => filterHandler(evt)} value={props.filterYear}>
            <option value='all'>All</option>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
        </select>
    </div>)
}
export default ExpenseFilter;