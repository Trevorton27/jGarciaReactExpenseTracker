import React from 'react';

const TableRow = ({
  userData,
  reformatDate,
  stringToNumber,
  handleCheckbox
}) => {
  return userData.map((purchase) => (
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
  ));
};

export default TableRow;
