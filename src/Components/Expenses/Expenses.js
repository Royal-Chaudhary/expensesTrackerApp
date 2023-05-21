import React, {useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    
    const [filteredYear, setFilterYear] = useState("2023");
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter yearsList={props.years} selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                {/* Dynamic Expression */}
                <div className="expenses_lists">
                    <ExpensesList items={filteredExpenses}/>
                </div>

            </Card>
        </div>
    );
}

export default Expenses;