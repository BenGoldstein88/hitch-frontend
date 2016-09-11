import React from 'react';
import styles from '../../styles/indexStyles';

export default class SuggestionsBox extends React.Component {
  render() {
    return (
      <div style={{
      	// border: '1px blue solid',
      	height: '33.3%',
        // width: '250px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("../../app/images/suggestionbox.png")',
        backgroundSize: 'contain'
      }}>
      </div>

    );
  }
}
