import React from 'react';
import styles from '../../styles/indexStyles'

export default class PageDisplay extends React.Component {
  render() {
    return (
      <div className={styles.page.verticalAlign} style={{
      		border: '1px dashed black',
      		height: '100%'
      }}>Page Displays</div>
    );
  }
}
