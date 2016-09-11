import React from 'react';

export default class VenueNotes extends React.Component {


  render() {
    return (
      <div style={{
      	display: 'block',
      	width: '100%',
        height: '50%'
      }}>
      	<h2> Notes: </h2>
        <input type='textArea' style={{
            backgroundColor: 'pink',
            width: '95%',
            height: '100%'
        }} />
      </div>
    );
  }
}
