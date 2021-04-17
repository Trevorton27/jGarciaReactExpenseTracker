import React from 'react';
import './App.css';

const Table = ({ reformatDate, stringToNumber, userData, handleCheckbox }) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr className='Dark'>
          <th>date</th>
          <th>amount</th>
          <th>location of purchase</th>
          <th>expense description</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((purchase) => (
          <tr key={purchase.id}>
            <td>{reformatDate(purchase.date)}</td>
            <td>{stringToNumber(purchase.amount)}</td>
            <td>{purchase.description}</td>
            <td>{purchase.location}</td>
            <td>
              <input
                id={purchase.id}
                checked={purchase.checkbox}
                className='marker'
                onChange={handleCheckbox}
                type='checkbox'
              ></input>
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
