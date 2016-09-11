import React from 'react';
import VenueHeader from '../venue/VenueHeader'
import VenueLeftColumn from '../venue/VenueLeftColumn'
import VenueRightColumn from '../venue/VenueRightColumn'
import VenueFooter from '../venue/VenueFooter'

export default class PageDisplayVenue extends React.Component {

  render() {
    return (
      <div>
      	<VenueHeader />
      	<VenueLeftColumn />
        <VenueRightColumn />
        <VenueFooter />
      </div>
    );
  }
}
      	// <VenueRightColumn />
      	// <VenueFooter />
