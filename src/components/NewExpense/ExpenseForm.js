import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const [amountChange, setAmountChange] = useState('');
  const amountChangeHandler = (event) => {
    setAmountChange(event.target.value);
  };

  const [dateChange, setDateChange] = useState('');
  const dateChangeHandler = (event) => {
    setDateChange(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amountChange,
      date: new Date(dateChange),
    };
    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmountChange('');
    setDateChange('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.00"
            step="0.01"
            value={amountChange}
          />
        </div>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={dateChange}
            />
          </div>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
