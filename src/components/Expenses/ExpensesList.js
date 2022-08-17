import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
function ExpensesList(props) {
  let expensesContent = <p>No expenses found.</p>;

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
