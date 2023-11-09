import "./expenses.css"
function Expenses(){
    const expenses = [
        {date:'2023-03-22', name: 'Car insurance', amount:3000},
        {date:'2023-02-12', name: 'Bike insurance', amount:1000},
        {date:'2022-11-14', name: 'Fridge', amount:35000},
        {date:'2022-01-04', name: 'Sofa', amount:70000},
        {date:'2021-11-19', name: 'Groceries', amount:500},
        {date:'2021-07-27', name: 'TV', amount:15000},
        {date:'2021-03-03', name: 'AC', amount:40000},
    ]
    return <div> this is expenses

        {expenses.map((expense)=>{
            return (<div className="expense-item">
            <div className="expense-item-name">{expense.name}</div>
            <div className="expense-item-date">{expense.date}</div>
            <div className="expense-item-amount">$ {expense.amount}</div>
        </div>)
        })}

        {/* <div className="expense-item">
            <div className="expense-item-name">{expenses[0].name}</div>
            <div className="expense-item-date">{expenses[0].date}</div>
            <div className="expense-item-amount">$ {expenses[0].amount}</div>
        </div>
        <div className="expense-item">
            <div className="expense-item-name">{expenses[1].name}</div>
            <div className="expense-item-date">{expenses[1].date}</div>
            <div className="expense-item-amount">{expenses[1].amount}</div>
        </div>
        <div className="expense-item">
            <div className="expense-item-name">{expenses[2].name}</div>
            <div className="expense-item-date">{expenses[2].date}</div>
            <div className="expense-item-amount">{expenses[2].amount}</div>
        </div>
        <div className="expense-item">
            <div className="expense-item-name">{expenses[3].name}</div>
            <div className="expense-item-date">{expenses[3].date}</div>
            <div className="expense-item-amount">{expenses[3].amount}</div>
        </div>
        <div className="expense-item">
            <div className="expense-item-name">{expenses[4].name}</div>
            <div className="expense-item-date">{expenses[4].date}</div>
            <div className="expense-item-amount">{expenses[4].amount}</div>
        </div>
        <div className="expense-item">
            <div className="expense-item-name">{expenses[5].name}</div>
            <div className="expense-item-date">{expenses[5].date}</div>
            <div className="expense-item-amount">{expenses[5].amount}</div>
        </div>
        <div className="expense-item">
            <div className="expense-item-name">{expenses[6].name}</div>
            <div className="expense-item-date">{expenses[6].date}</div>
            <div className="expense-item-amount">{expenses[6].amount}</div>
        </div> */}

    </div>
}

export default Expenses;