function ExpenseList(props){
return <div className="expenses-list">
            {props.list.map((item, index) =>{
                return <div className='expenses-row' key={'item-'+index}>
                        <div className='expenses-col name'> {item.name} </div>
                        <div className='expenses-col date'> {item.date} </div>
                        <div className='expenses-col amount'> {item.amount}** </div>
                    </div>
            })}
        </div>
}
export default ExpenseList;