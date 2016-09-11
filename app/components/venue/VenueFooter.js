import React from 'react';
import PdfButton from './PdfButton'
import WatsonButton from './WatsonButton'
import SaveCancelButton from './SaveCancelButton'
import WatsonModal from '../WatsonModal'
export default class VenueFooter extends React.Component {

  render() {
    return (
      <div style={{
      	height: '12.5%',
      	width: '100%',
        float: 'bottom'
      }}>
      	<PdfButton />
      	<WatsonButton />
      	<SaveCancelButton />
        <WatsonModal />
      </div>
    );
  }
}