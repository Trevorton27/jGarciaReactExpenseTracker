import React from 'react';

const Form = ({ handleSubmit, handleChange, data, deleteRow }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='dateOfExpense'
        type='date'
        onChange={handleChange}
        value={data.dateOfExpense}
      />
      <input
        className='m-2'
        name='userSpentAmount'
        type='number'
        onChange={handleChange}
        value={data.userSpentAmount}
      />
      <input
        placeholder='location of purchase'
        name='itemDescription'
        type='text'
        onChange={handleChange}
        value={data.itemDescription}
      />
      <input
        className='m-2'
        placeholder='expense description'
        name='whereExpenseOccured'
        type='text'
        onChange={handleChange}
        value={data.whereExpenseOccured}
      />
      <div>
        <button
          className='btn btn-danger  float-end '
          onClick={deleteRow}
          type='button'
        >
          delete
        </button>
        <button className='btn btn-primary float-end me-3' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
