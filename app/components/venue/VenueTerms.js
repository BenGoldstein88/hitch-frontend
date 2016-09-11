import React from 'react';

export default class VenueTerms extends React.Component {

  render() {
    return (
      <div style={{
      	display: 'block',
        width: '100%',
        height: '60%',
        fontFamily: 'Raleway'
      }}>

      	<h2 style={{fontSize:'16px'}}> TERMS & PROPOSALS: </h2>

      	<input value={this.props.text} type='textArea' style={{background: 'rgba(254, 149, 125, 0.2)', height: '100%', width: '100%'
        }} />
      </div>
    );
  }
}
