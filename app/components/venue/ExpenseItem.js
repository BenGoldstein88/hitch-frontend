import React from 'react';

export default class ExpenseItem extends React.Component {


  render() {
    return (
      <div style={{display: 'block', marginBottom: '.5%', height: '20%'}}>
        <input value={this.props.item}type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		backgroundColor: 'pink'
      	}} />

      	<input value={this.props.price} type='text' style={{
      		display: 'inline-block',
      		width: '15%',
      		backgroundColor: 'pink'
      	}} />
      	X
      	<input value={this.props.quantity}type='text' style={{
      		display: 'inline-block',
      		width: '15%',
      		backgroundColor: 'pink'
      	}} />
      	=
       	<input value={this.props.total}type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		backgroundColor: 'pink'
      	}} />
      </div>
    );
  }
}
