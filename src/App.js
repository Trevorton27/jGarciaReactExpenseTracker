import React, { Component } from 'react';
import Form from './Formfield';
import Table from './Table';

class App extends Component {
  state = {
    dateOfExpense: '',
    userSpentAmount: 0,
    itemDescription: '',
    whereExpenseOccured: '',
    expenses: []
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log('name: ', name, 'value: ', value);
    this.setState({
      [name]: value
    });

    console.log('state: ', this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      date: this.state.dateOfExpense,
      amount: this.state.userSpentAmount,
      description: this.state.itemDescription,
      location: this.state.whereExpenseOccured
    };

    this.setState({
      expenses: [...this.state.expenses, newExpense]
      // dateOfExpense: '',
      // userSpentAmount: 0,
      // itemDescription: '',
      // whereExpenseOccured: ''
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      todo: this.state.expenses.map((expense, index) => {
        if (index === e.target.id * 1) {
          return {
            checkbox: !expense.checkbox
          };
          // } else {
          //   return { ...expense };
        }
      })
    });
  };

  reformatDate = (date) => {
    let year = date.slice(0, 4);
    year = date.slice(5, 10) + '-' + year;
    return year;
  };

  stringToNumber = (amountString) => {
    let newNum = parseFloat(amountString);
    newNum = '$' + newNum.toFixed(2);
    return newNum;
  };
  deleteRow = (id) => {
    console.log('I done fired');
    const removedRow = this.state.expenses.filter(
      (expense) => id !== expense.id
    );
    this.setState({
      expenses: removedRow
    });
  };

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'> Expence-tracker</h1>
        <Form
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Table
          userData={this.state.expenses}
          manageBox={this.handleCheckbox}
          reformatDate={this.reformatDate}
          stringToNumber={this.stringToNumber}
          deleteRow={this.deleteRow}
        />
      </div>
    );
  }
}

export default App;
