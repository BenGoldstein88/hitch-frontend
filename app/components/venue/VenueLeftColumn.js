import React from 'react';
import VenueContactInfo from './VenueContactInfo'
import VenueTerms from './VenueTerms'
export default class VenueLeftColumn extends React.Component {

  render() {
    return (
      <div className='col-sm-6' style={{
      	height: '74%',
        display: 'block'
      }}>
	      <VenueContactInfo contactName={this.props.contactName} contactNumber={this.props.contactNumber}/>
	      <VenueTerms />
      	
      </div>
    );
  }
}