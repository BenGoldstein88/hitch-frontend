import React from 'react';
import VenueExpenses from './VenueExpenses'
import VenueNotes from './VenueNotes'

export default class VenueRightColumn extends React.Component {

  render() {
    return (
      <div className='col-sm-6' style={{
      	height: '74%',
        display: 'block',
        fontFamily: 'Raleway'
      }}>
      	<VenueExpenses mealPackagePrice={this.props.mealPackagePrice} mealPackageQuantity={this.props.mealPackageQuantity} valetParkingPrice={this.props.valetParkingPrice} valetParkingQuantity={this.props.valetParkingQuantity} venueRentalFee={this.props.venueRentalFee}/>
      	<VenueNotes />
      </div>
    );
  }
}
