import React, { useState } from 'react';
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 296.67,
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 11),
  },
  {
    id: 'e3',
    title: 'Bananas',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Udemy',
    amount: 25.99,
    date: new Date(2021, 3, 4),
  },
];
function App() {
  console.log(DUMMY_EXPENSES[0]);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems item={expenses} />
    </div>
  );
}

export default App;
