import React, { useState } from 'react';
import './AddExpense.css';
const AddExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      price: enteredPrice,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredPrice('');
  };
  return (
    <form className='add-expense-form' onSubmit={submitFormHandler}>
      <h3>Add Expense</h3>
      <div className='expense-input-container title-input-container'>
        <label>Expense Title</label>
        <input
          type='text'
          className='form-control'
          placeholder='Title'
          value={enteredTitle}
          onChange={titleHandler}
        />
      </div>
      <div className='expense-input-container date-input-container'>
        <label>Exepense Date</label>
        <input
          type='date'
          min='2019-01-01'
          max='2021-12-31'
          className='form-control'
          value={enteredDate}
          onChange={dateHandler}
        />
      </div>
      <div className='expense-input-container price-input-container'>
        <label>Expense Price</label>
        <input
          type='number'
          className='form-control'
          min='10'
          step='5'
          max='95'
          placeholder='Price'
          value={enteredPrice}
          onChange={priceHandler}
        />
      </div>
      <div className='expense-input-container submit-button-container'>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddExpense;
