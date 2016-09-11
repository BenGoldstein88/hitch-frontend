import React from 'react';

export default class VenueHeader extends React.Component {

  render() {
    return (
      <div style={{
      	height: '12.5%',
      	width: '100%'
      }}>
      	<input type='text' style={{
      		background: 'transparent',
      		border: 'none',
      		display: 'block',
      		margin: 'auto'
      	}} />
      	<input type='text' style={{
      		background: 'transparent',
      		border: 'none',
      		display: 'block',
      		margin: 'auto'
      	}} />
      </div>
    );
  }
}
