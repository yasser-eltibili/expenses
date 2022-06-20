import React from 'react';
import './ExpensesList.css';
const ExpensesList = ({ pages, activeId }) => {
  return (
    <div>
      <h3>Expenses List</h3>
      <ul className='expenses-list'>
        {pages[activeId].map((expense) => (
          <li key={expense.id}>
            <div className='date-container expense-container'>
              <span className='month-container'>
                {expense.date.toLocaleDateString('en-US', { month: 'long' })}{' '}
              </span>
              <span className='year-container'>
                {expense.date.getFullYear()}{' '}
              </span>
              <span className='day-container'>
                {expense.date.toLocaleDateString('en-US', { day: '2-digit' })}
              </span>
            </div>
            <div className='title-container expense-container'>
              {expense.title}
            </div>
            <div className='price-container expense-container'>
              {expense.price}$
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpensesList;
