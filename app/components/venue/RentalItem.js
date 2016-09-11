import React from 'react';

export default class RentalItem extends React.Component {


  render() {
    return (

      <div style={{
        display: 'block',
        marginBottom: '.5%',
        height: '20%',
        fontFamily: 'Raleway'
        }}>
        <input value='Rental Fee' type='text' style={{

      		display: 'inline-block',
      		width: '59%',
      		background: 'rgba(254, 149, 125, 0.2)'
      	}} />
      	<input type='text' style={{
      		display: 'inline-block',
      		background: 'transparent',
      		border: 'none',
      		width: '3.5%'
      	}} />
      	=
       	<input value={this.props.price} type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		background: 'rgba(254, 149, 125, 0.2)'
      	}} />
      </div>
    );
  }
}
