import React from 'react';
import styles from '../../styles/indexStyles'

export default class PageDisplay extends React.Component {
  render() {
    return (
      <div className={styles.page.verticalAlign} style={{
      		height: '100%'
      }}>
        <div style={{
          height: '100vh',
          margin: '50px 0px 75px 0px',
          backgroundImage: 'url("../../app/images/maxiDiamond.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
        </div>
      </div>
    );
  }
}
