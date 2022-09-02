import './ExpenseForm.css'
import { useState } from 'react';
import styled from 'styled-components';
const ExpenseForm = (props)=>{

    const [entertedTitle, setEnteredTitle] = useState('');
    const [entertedAmount, setEnteredAmount] = useState('');
    const [entertedDate, setEnteredDate] = useState('');
    const [isTitleValid, setIsTitileValid] = useState(true);
    // const [userInput, setUserInput] = useState({
    //     entertedTitle :'',
    //     entertedAmount:'',
    //     entertedDate: '',
    // });


    var name = 'mahesh';

    var str = 'hello ' + name;
    var str2 = "hello" + name + "asdf asdf  asddf a" + isTitleValid + "asdfasdf asdf a dsfa sdf";
    var str3 = `hello ${name} asd asd fasdf sd wer sdv asdf a ${isTitleValid} asdf asf asdf asdf awef`;


    const Button = styled.button `
    background-color: skyblue;
    width: 135px;
    height: 30px;
    border: none;
    margin: 10px;
    cursor: pointer;

    &.asdf{
        color:white
    }
    &:hover {
        background-color: #c49bdb;
    }
    `;
    const titleChangeHandler = (event)=>{
         setEnteredTitle(event.target.value);
         if(event.target.value.trim()){
            setIsTitileValid(true)
         } else {
            setIsTitileValid(false);
         }
        //setUserInput({...userInput, entertedTitle: event.target.value});

        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         entertedTitle: event.target.value
        //     }
        // })
        // console.log(userInput);
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({...userInput,entertedAmount: event.target.value})
        // console.log(userInput);
    }
    const dateChangeHandler = (event)=>{
        //console.log(event.target.value)
        setEnteredDate(event.target.value);
        // setUserInput({...userInput, entertedDate: new Date(event.target.value)})
        // console.log(userInput);
    }
    const submitHandler = (event)=>{
        event.preventDefault();

        // adding validation logics while saving the data
        if(entertedTitle.trim() && entertedAmount && entertedDate ){
            const expenseData = {
                title: entertedTitle,
                amount : entertedAmount,
                date : new Date(entertedDate)
            }

            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');

            props.onSaveExpensesData(expenseData);
            setIsTitileValid(true)
        } else {
            setIsTitileValid(false)
        }

    }
    return <form onSubmit={submitHandler}>
        <div>
            {/* <label style={{color: !isTitleValid ? 'red': 'black', backgroundColor:!isTitleValid ? 'yellow': 'white'}}> Title</label> */}
            {/* <div><input type="text" style={{borderColor:!isTitleValid ? 'red': 'transparent', borderStyle:'solid'}} value={entertedTitle} onChange={titleChangeHandler} /></div> */}
            {/* <label className={'form-control' + (!isTitleValid ? 'invalid': '') + 'asdf' } > Title</label> */}

            <label className={` ${!isTitleValid ? 'invalid': ''}   form-control  `} > Title</label>
            <div><input type="text" value={entertedTitle} onChange={titleChangeHandler} /></div>

        </div>
        <div>
            <label> Amount</label>
            <div><input type="number" value={entertedAmount} onChange={amountChangeHandler}/></div>
        </div>
        <div>
            <label> Date</label>
            <div><input type="date" value={entertedDate} onChange={dateChangeHandler}/></div>
        </div>
        <div>
            <Button className='asdf' >Create</Button>
        </div>
    </form>
}

export default ExpenseForm