import React, { useState, useEffect } from 'react';
import Expenses from "./Components/Expenses/Expenses";
import NewExpanse from "./Components/NewExpense/NewExpanse";
import Navbar from './Components/UI/navbar';
import './Components/UI/home.css'

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      const parsedExpenses = storedExpenses.map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date)
        }
      });
      setExpenses(parsedExpenses);
    }
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [expense, ...prevExpenses];
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  const years = [...new Set(expenses.map((expense) => expense.date.getFullYear()))];

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="column column1">
          <NewExpanse onAddExpense={addExpenseHandler} />
        </div>
        <div className="column column2">
          <div className="column2_outer">
            <Expenses item={expenses} years={years} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

