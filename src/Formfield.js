import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        name='dateOfexpense'
        type='date'
        onChange={props.handleChange}
        value={props.data.dateOfexpense}
      />
      <input
        className='m-2'
        name='userSpentAmount'
        type='number'
        onChange={props.handleChange}
        value={props.data.userSpentAmount}
      />
      <input
        placeholder='location of purchase'
        name='itemDescription'
        type='text'
        onChange={props.handleChange}
        value={props.data.itemDescription}
      />
      <input
        className='m-2'
        placeholder='expense description'
        name='whereExpenseOccured'
        type='text'
        onChange={props.handleChange}
        value={props.data.whereExpenseOccured}
      />
      <div>
        <button
          className='btn btn-primary float-end me-3'
          onClick={props.submit}
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
