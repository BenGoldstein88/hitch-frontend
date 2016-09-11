import React from 'react';

export default class VenueContactInfo extends React.Component {

  render() {
    return (
      <div style={{
      	display: 'block',
      	width: '100%',
        height: '40%'
      }}>
      	<h2>Contact Info: </h2>
        <input type='text' style={{backgroundColor: 'pink', width: '75%', marginRight: '20%',
        marginLeft: '10%'}} />
        <input type='text' style={{backgroundColor: 'pink', width: '75%', marginRight: '20%',
        marginLeft: '10%'}} />
        <input type='text' style={{backgroundColor: 'pink', width: '85%',
        marginLeft: '10%'}} />
      </div>
    );
  }
}
