import React from 'react';
import './ExpensesPagenation.css';
const ExpensesPagenation = ({ pages, choosePage, activeId }) => {
  return (
    <nav>
      <ul className='pagination'>
        {pages.map((page, i) => (
          <li
            id={i}
            key={i}
            className={activeId == i ? 'page-link active' : 'page-link'}
            onClick={choosePage}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ExpensesPagenation;
