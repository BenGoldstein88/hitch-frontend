import React from 'react';
import styles from '../../styles/indexStyles'
// import FileUploadForm from '../venue/FileUploadForm'
import Typist from 'react-typist';

export default class PageDisplay extends React.Component {
  render() {
    return (
      <div className={styles.page.verticalAlign} style={{
      		height: '73vh'
      }}>
        <div style={{
          height: '100%',
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
