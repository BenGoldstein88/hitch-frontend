import React from 'react';
import {Button} from 'react-bootstrap'
export default class VenueExpensesFooter extends React.Component {


  render() {
    return (
      <div style={{height: '20%'}}>

      	<Button style={{float: 'left', marginBottom: '2%', width: '22.5%'}}bsStyle='default'>Pay</Button>
      	TOTAL EXPENSES:
      	<input value={this.props.total} type='text' style={{background: 'rgba(254, 149, 125, 0.2)'}} />

      </div>
    );
  }
}
