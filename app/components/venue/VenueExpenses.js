import React from 'react';
import RentalItem from './RentalItem'
import ExpenseItem from './ExpenseItem'

import VenueExpensesFooter from './VenueExpensesFooter'
export default class VenueExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: '',
      price1: '',
      quantity1: '',
      total1: '',
      item2: '',
      price2: '',
      quantity2: '',
      total2: '',
      rentalFee: '',
      grandTotal: ''

    };
    this.handleMount = this.handleMount.bind(this)

  }
  handleMount() {
    var that = this
    console.log('yay?')
    setTimeout(function() {
      that.setState({
        item1: 'Meals'
      })
    }, 2800)

    setTimeout(function() {
      that.setState({

        price1: that.props.mealPackagePrice
      })
    }, 3200)
    setTimeout(function() {
      that.setState({

        quantity1: that.props.mealPackageQuantity,
        total1: '$20,000'
      })
    }, 3500)
    setTimeout(function() {
      that.setState({

        item2: 'Valet'
      })
    }, 3600)
    setTimeout(function() {
      that.setState({

        price2: that.props.valetParkingPrice
      })
    }, 3900)
    setTimeout(function() {
      that.setState({
        quantity2: that.props.valetParkingQuantity,
        total2: '$2,000'
      })
    }, 4100)
    setTimeout(function() {
      that.setState({

        rentalFee: '$5,000'
      })
    }, 4200)

    setTimeout(function() {
      that.setState({

        grandTotal: '$27,000'
      })
    }, 4200)

  }
  componentDidMount() {
    this.handleMount()
  }
  render() {
    return (
      <div style={{
      	display: 'block',
      	width: '100%',
        height: '50%',
        fontFamily: 'Raleway'
      }}>
      	<h2 style={{fontFamily: 'Raleway'}}> EXPENSES: </h2>
        <ExpenseItem item={this.state.item1} price={this.state.price1} quantity={this.state.quantity1} total={this.state.total1}/>
        <ExpenseItem item={this.state.item2} price={this.state.price2} quantity={this.state.quantity2} total={this.state.total2}/>
        <RentalItem price={this.state.rentalFee}/>
        <VenueExpensesFooter total={this.state.grandTotal}/>


      </div>
    );
  }
}
