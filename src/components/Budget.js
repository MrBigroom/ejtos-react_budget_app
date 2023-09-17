import React, {useContext, useState} from 'react';
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const { dispatch, budget, expenses, Currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    };
    
    return (
        <div className="alert alert-secondary">
            <span>Budget: {Currency}</span>
            <input type="number" step="10" value={newBudget} max="20000" onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
