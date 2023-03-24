import './expenses.css';
function Expenses(){
    let data = [
        {date:'22-03-2023', name:'car Insurance', amount:5000},
        {date:'17-04-2022', name:'bike Insurance', amount:2000},
        {date:'11-05-2023', name:'AC', amount:35000},
        {date:'05-01-2022', name:'TV', amount:45000},
        {date:'12-03-2021', name:'Groceries', amount:500},
        {date:'12-02-2023', name:'Furniture', amount:125000},
    ]
    return <>
            <div> im expenses</div>
            <div> im expenses contd..</div>
            {data.map((expense)=>{
                return  <div className='expense-item'>
                <div className='expense-name'>{expense.name}</div>
                <div className='expense-date'>{expense.date}</div>
                <div className='expense-amount'>{expense.amount}</div>
            </div>
            })}
            
            
{/*            

            <div className='expense-item'>
                <div className='expense-name'>{data[0].name}</div>
                <div className='expense-date'>{data[0].date}</div>
                <div className='expense-amount'>{data[0].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[1].name}</div>
                <div className='expense-date'>{data[1].date}</div>
                <div className='expense-amount'>{data[1].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[2].name}</div>
                <div className='expense-date'>{data[2].date}</div>
                <div className='expense-amount'>{data[2].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[3].name}</div>
                <div className='expense-date'>{data[3].date}</div>
                <div className='expense-amount'>{data[3].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[4].name}</div>
                <div className='expense-date'>{data[4].date}</div>
                <div className='expense-amount'>{data[4].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[5].name}</div>
                <div className='expense-date'>{data[5].date}</div>
                <div className='expense-amount'>{data[5].amount}</div>
            </div> */}
        </>
}

export default Expenses

// <> </>-- fragment