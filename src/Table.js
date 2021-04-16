import React from 'react';

const Table = ({
  reformatDate,
  stringToNumber,
  userData,
  manageBox,
  deleteRow
}) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr className='Dark'>
          <th>date</th>
          <th>amount</th>
          <th>location of purchase</th>
          <th>expence description</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((purchase, index) => (
          <tr key={index}>
            <td>{reformatDate(purchase.date)}</td>
            <td>{stringToNumber(purchase.amount)}</td>
            <td>{purchase.description}</td>
            <td>{purchase.location}</td>
            <td>
              <input
                id={index}
                checked={purchase.checkbox}
                className='marker'
                onChange={manageBox}
                type='checkbox'
              ></input>
            </td>
            <td>
              <button
                className='btn btn-danger  float-end '
                onClick={() => {
                  deleteRow(purchase.id);
                  console.log('purchase: ', purchase);
                }}
                type='button'
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
