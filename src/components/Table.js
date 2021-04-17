import React from 'react';

import TableRow from './TableRow';

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
        <TableRow
          reformatDate={reformatDate}
          stringToNumber={stringToNumber}
          userData={userData}
          handleCheckbox={handleCheckbox}
        />
      </tbody>
    </table>
  );
};

export default Table;
