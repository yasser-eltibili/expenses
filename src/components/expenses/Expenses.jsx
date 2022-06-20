import React, { useState } from 'react';
import './Expenses.css';
import AddExpense from './AddExpense';
import FilterExpenses from './FilterExpenses';
import ExpensesList from './ExpensesList';
import ExpensesPagenation from './ExpensesPagenation';
const Expenses = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'expense-000000000',
      title: 'Book 1',
      date: new Date(2019, 1, 3),
      price: 15,
    },
    {
      id: 'expense-000000001',
      title: 'Book 2',
      date: new Date(2019, 5, 2),
      price: 10,
    },
    {
      id: 'expense-000000002',
      title: 'Book 3',
      date: new Date(2019, 8, 24),
      price: 15,
    },
    {
      id: 'expense-000000003',
      title: 'Book 4',
      date: new Date(2019, 10, 27),
      price: 10,
    },
    {
      id: 'expense-000000004',
      title: 'Book 5',
      date: new Date(2020, 0, 10),
      price: 20,
    },
    {
      id: 'expense-000000005',
      title: 'Book 6',
      date: new Date(2020, 0, 12),
      price: 35,
    },
    {
      id: 'expense-000000006',
      title: 'Book 7',
      date: new Date(2020, 0, 20),
      price: 50,
    },
    {
      id: 'expense-000000007',
      title: 'Book 8',
      date: new Date(2020, 1, 24),
      price: 30,
    },
    {
      id: 'expense-000000008',
      title: 'Book 9',
      date: new Date(2020, 6, 28),
      price: 10,
    },
    {
      id: 'expense-000000009',
      title: 'Book 10',
      date: new Date(2020, 11, 25),
      price: 10,
    },
    {
      id: 'expense-000000010',
      title: 'Book 11',
      date: new Date(2020, 11, 29),
      price: 15,
    },
    {
      id: 'expense-000000011',
      title: 'Book 12',
      date: new Date(2021, 2, 1),
      price: 25,
    },
    {
      id: 'expense-000000012',
      title: 'Book 13',
      date: new Date(2021, 2, 10),
      price: 20,
    },
    {
      id: 'expense-000000013',
      title: 'Book 14',
      date: new Date(2021, 3, 24),
      price: 10,
    },
    {
      id: 'expense-000000014',
      title: 'Book 15',
      date: new Date(2021, 5, 25),
      price: 40,
    },
    {
      id: 'expense-000000015',
      title: 'Book 16',
      date: new Date(2021, 7, 11),
      price: 10,
    },
    {
      id: 'expense-000000016',
      title: 'Book 17',
      date: new Date(2021, 7, 15),
      price: 10,
    },
    {
      id: 'expense-000000017',
      title: 'Book 18',
      date: new Date(2021, 7, 19),
      price: 50,
    },
    {
      id: 'expense-000000018',
      title: 'Book 19',
      date: new Date(2021, 8, 8),
      price: 20,
    },
    {
      id: 'expense-000000019',
      title: 'Book 20',
      date: new Date(2021, 11, 16),
      price: 20,
    },
  ]);
  let [filtered, setFiltered] = useState([...expenses]);
  let optionValue;
  let [paging, setPaging] = useState(expenses.slice(0, 5));
  let [activeId, setActiveId] = useState(0);

  const selectChangeHandler = (event) => {
    optionValue = event.target.value;
  };

  const filterExpensesHandler = () => {
    if (optionValue == 'All Expenses') {
      setFiltered([...expenses]);
    } else {
      setFiltered(
        expenses.filter((item) => item.date.getFullYear() == optionValue)
      );
    }
    return filtered;
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    setFiltered((prevFiltered) => {
      return [...prevFiltered, expenseData];
    });
  };

  const paginate = (arr, size) => {
    return arr.reduce((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);

      return acc;
    }, []);
  };
  let pages = paginate(filtered, 5);

  const choosePage = (event) => {
    const id = event.target.id;
    setPaging(pages[id]);
    setActiveId(id);
  };

  return (
    <div className='expenses'>
      <h2 className='main-title'>Expenses</h2>
      <AddExpense onSaveExpenseData={saveExpenseDataHandler} />
      <FilterExpenses
        selectChangeHandler={selectChangeHandler}
        filterExpensesHandler={filterExpensesHandler}
      />
      <ExpensesList pages={pages} activeId={activeId} />
      <ExpensesPagenation
        pages={pages}
        choosePage={choosePage}
        activeId={activeId}
      />
    </div>
  );
};

export default Expenses;
