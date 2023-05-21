import React,{useState} from "react"
import ExpanseForm from './ExpanseForm';
import './NewExpanse.css'

const NewExpanse = (props) => {
    const saveExpanseDataHandler = (enteredExpanseData) => {
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expanseData);
        setIsEditing(false);
    }

    const [isEditing , setIsEditing] = useState(false);
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const StopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button  onClick={startEditingHandler}> Add New Expenses </button>}
            {isEditing && <ExpanseForm onSaveExpanseData={saveExpanseDataHandler} onCancel={StopEditingHandler} />}
        </div>
    )
}

export default NewExpanse;
