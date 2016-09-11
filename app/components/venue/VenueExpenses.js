import React from 'react';
import RentalItem from './RentalItem'
import ExpenseItem from './ExpenseItem'

import VenueExpensesFooter from './VenueExpensesFooter'
export default class VenueExpenses extends React.Component {

  render() {
    return (
      <div style={{
      	display: 'block',
      	width: '100%',
        height: '50%'
      }}>
      	<h2> Expenses: </h2> 
      	<ExpenseItem />
        <ExpenseItem />
        <RentalItem />
        <VenueExpensesFooter />
      </div>
    );
  }
}
