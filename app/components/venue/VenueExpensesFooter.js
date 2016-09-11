import React from 'react';
import {Button} from 'react-bootstrap'
export default class VenueExpensesFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pay: this.props.pay
		}
		this.handleDoubleClick = this.handleDoubleClick.bind(this)
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}

	handleDoubleClick(e) {
		this.props.onPayChange()
	}

	handleButtonClick(e) {
		alert('You have successfully paid a $11,000 deposit to the WESTIN ST. FRANCIS! Your next payment of $10,000 is due by 17 January 2017.')
	}

	enableButton() {
		if (this.props.pay) {
			<Button style={{float: 'left', marginBottom: '2%', width: '22.5%'}} bsStyle='success'>Pay</Button>
		} else {
			<Button style={{float: 'left', marginBottom: '2%', width: '22.5%'}} bsStyle='default' disabled>Pay</Button>
		}
	}

  render() {
  	let payButton;
  	if (this.props.pay) {
			payButton = <Button onClick={this.handleButtonClick}style={{float: 'left', marginBottom: '2%', width: '22.5%'}} bsStyle='success'>Pay</Button>
		} else {
			payButton = <Button style={{float: 'left', marginBottom: '2%', width: '22.5%'}} bsStyle='default' disabled>Pay</Button>
		}


    return (
      <div onDoubleClick={this.handleDoubleClick} style={{height: '20%'}}>
      	{payButton}
      	TOTAL EXPENSES:
      	<input value={this.props.total} type='text' style={{background: 'rgba(254, 149, 125, 0.2)'}} />

      </div>
    );
  }
}
