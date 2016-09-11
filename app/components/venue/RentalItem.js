import React from 'react';

export default class RentalItem extends React.Component {


  render() {
    return (
      <div style={{display: 'block', marginBottom: '.5%', height: '20%'
}}>
        <input value='Rental Fee' type='text' style={{
      		display: 'inline-block',
      		width: '59%',
      		backgroundColor: 'pink'
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
      		backgroundColor: 'pink'
      	}} />
      </div>
    );
  }
}
