import React from 'react';
import './FilterExpenses.css';
const FilterExpenses = ({ selectChangeHandler, filterExpensesHandler }) => {
  return (
    <div className='filter-expense'>
      <div>
        <select defaultValue={'All Expenses'} onChange={selectChangeHandler}>
          <option value='All Expenses'>All Expenses</option>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
        </select>
      </div>
      <div>
        <button className='btn btn-primary' onClick={filterExpensesHandler}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterExpenses;
