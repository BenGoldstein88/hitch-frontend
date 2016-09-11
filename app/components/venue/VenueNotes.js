import React from 'react';

export default class VenueNotes extends React.Component {


  render() {
    return (
      <div style={{
      	display: 'block',
      	width: '100%',
        height: '50%',
        fontFamily: 'Raleway',
      }}>
      	<h2> NOTES: </h2>
        <input type='textArea' style={{
            background: 'rgba(254, 149, 125, 0.2)',
            width: '95%',
            height: '100%'
        }} />
      </div>
    );
  }
}
