import React from 'react';

export default class ExpenseItem extends React.Component {


  render() {
    return (
      <div style={{display: 'block', marginBottom: '.5%', height: '20%'}}>
        <input type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		backgroundColor: 'pink'
      	}} />

      	<input type='text' style={{
      		display: 'inline-block',
      		width: '15%',
      		backgroundColor: 'pink'
      	}} />
      	X
      	<input type='text' style={{
      		display: 'inline-block',
      		width: '15%',
      		backgroundColor: 'pink'
      	}} />
      	=
       	<input type='text' style={{
      		display: 'inline-block',
      		width: '30%',
      		backgroundColor: 'pink'
      	}} />
      </div>
    );
  }
}
