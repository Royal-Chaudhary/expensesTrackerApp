import React, {useState,useRef } from "react";
import './ExpanseForm.css';

const ExpanseForm = (props) => {

    const emptyInput = useRef(null);

    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear().toString()}`;
    console.log(formattedDate); // outputs something like "15/02/2023"


    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState(`${formattedDate}`);

    // const [userInput, setUserInput] =  useState({
    //     EnteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); // one way to update the state

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // }); 
        
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    }

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // prevent the default behaviour of the browser

        const ifEmpty = (enteredTitle === '' || enteredAmount === '' || enteredDate === '');

        if (ifEmpty) {
            emptyInput.current.textContent = 'Please fill all the fields';
        }
        else{
            const expenseData = {
                title: enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate),
            };

            props.onSaveExpanseData(expenseData); 
            // call the function passed from the parent component

            setEnteredTitle(''); // reset the state using the state hook and two way binding
            setEnteredAmount('');
            setEnteredDate('');
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <h3>Add New Item</h3>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler} 
                        value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min='0.01' step='0.01'
                        onChange={amountChangeHandler}  
                        value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        max='2080-12-31' 
                        min='2019-01-01' 
                        onChange={dateChangeHandler}
                        value={enteredDate} 
                    />
                </div>
                
            </div>
            <p className="alert" ref={emptyInput}></p>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expanse</button>
            </div>
        </form>
    )
}

export default ExpanseForm;