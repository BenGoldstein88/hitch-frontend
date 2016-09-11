import React from 'react';

export default class VenueTerms extends React.Component {

  render() {
    return (
      <div style={{
      	display: 'block',
        width: '100%',
        height: '60%'

      }}>

      	<h2> Terms & Proposals: </h2>
      	<input value={this.props.text} type='textArea' style={{background: 'pink', height: '100%', width: '100%', wrap: 'hard', cols: '2'
        }} />
      </div>
    );
  }
}
