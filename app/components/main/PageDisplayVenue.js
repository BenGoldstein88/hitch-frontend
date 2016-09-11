import React from 'react';
import VenueHeader from '../venue/VenueHeader'
import VenueLeftColumn from '../venue/VenueLeftColumn'
export default class PageDisplayVenue extends React.Component {

  render() {
    return (
      <div>
      	<VenueHeader />
      	<VenueLeftColumn />
      </div>
    );
  }
}
      	// <VenueRightColumn />
      	// <VenueFooter />
