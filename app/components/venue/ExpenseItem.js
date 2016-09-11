import React from 'react';

export default class ExpenseItem extends React.Component {


  render() {
    return (

      <div style={{
        display: 'block',
        marginBottom: '.5%',
        height: '20%',
        fontFamily: 'Raleway'}}>
        <input type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		background: 'rgba(254, 149, 125, 0.2)'
      	}} />

      	<input value={this.props.price} type='text' style={{
      		display: 'inline-block',
      		width: '15%',
      		background: 'rgba(254, 149, 125, 0.2)'
      	}} />
      	X
      	<input value={this.props.quantity}type='text' style={{
      		display: 'inline-block',
      		width: '15%',
      		background: 'rgba(254, 149, 125, 0.2)'
      	}} />
      	=
       	<input value={this.props.total}type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		background: 'rgba(254, 149, 125, 0.2)'
      	}} />
      </div>
    );
  }
}
