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
        height: '50%',
        fontFamily: 'Raleway'
      }}>
      	<h2 style={{fontFamily: 'Raleway', fontSize:'16px'}}> EXPENSES: </h2>
      	<ExpenseItem />
        <ExpenseItem />
        <RentalItem />
        <VenueExpensesFooter />
      </div>
    );
  }
}
