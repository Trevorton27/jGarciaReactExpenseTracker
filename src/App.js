import React, { Component } from 'react';
import Form from './components/Formfield';
import Table from './components/Table';
import './App.css';

class App extends Component {
  state = {
    dateOfExpense: '',
    userSpentAmount: 0,
    itemDescription: '',
    whereExpenseOccured: '',
    expenses: []
  };

  componentDidMount() {
    const localStorageExpenses =
      JSON.parse(localStorage.getItem('expenses')) || [];

    this.setState({
      expenses: localStorageExpenses
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.expenses !== prevState.expenses.length) {
      localStorage.setItem('expenses', JSON.stringify(this.state.expenses));
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      date: this.state.dateOfExpense,
      amount: this.state.userSpentAmount,
      description: this.state.itemDescription,
      location: this.state.whereExpenseOccured,
      checkbox: false
    };

    this.setState({
      expenses: [...this.state.expenses, newExpense],
      dateOfExpense: '',
      userSpentAmount: 0,
      itemDescription: '',
      whereExpenseOccured: ''
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      expenses: this.state.expenses.map((expense) => {
        if (expense.id === e.target.id * 1) {
          console.log('row.target.id: ', e.target.id);
          return {
            ...expense,
            checkbox: !expense.checkbox
          };
        } else {
          return { ...expense };
        }
      })
    });
    console.log('expenses checkbox: ', this.state.expenses);
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
  deleteRow = () => {
    console.log('I done fired');
    this.setState({
      expenses: this.state.expenses.filter(
        (expense) => expense.checkbox === false
      )
    });
  };

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'> Expense-tracker</h1>
        <Form
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          deleteRow={this.deleteRow}
        />
        <Table
          userData={this.state.expenses}
          handleCheckbox={this.handleCheckbox}
          reformatDate={this.reformatDate}
          stringToNumber={this.stringToNumber}
        />
      </div>
    );
  }
}

export default App;
