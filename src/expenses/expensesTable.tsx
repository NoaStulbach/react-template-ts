import React from 'react';
import { Expense, getExpenses } from './expenseApi';

type ExpensesTableState = {
  expenses: Expense[] | undefined;  
}

class ExpensesTable extends React.Component<{}, ExpensesTableState> {
  state: ExpensesTableState = {
    expenses: undefined
  }

  componentDidMount () {
    getExpenses("noa.stulbach")
      .then(expenses => 
          this.setState({expenses})
        );
  }

  render () {
    return (
      <div>
      <table>
        <thead>
          <tr>
          <th>Date</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { this.state.expenses ? this.state.expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.date.toString()}</td>
              <td>{expense.merchant}</td>
              <td>{`$${expense.amount.toFixed(2)}`}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{expense.status}</td>
            </tr>
          )) : <></>}
        </tbody>
      </table>
      </div>
    );
  }
}


export default ExpensesTable;
