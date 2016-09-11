import React from 'react';
import styles from '../../styles/indexStyles'
// import FileUploadForm from '../venue/FileUploadForm'
import Typist from 'react-typist';
import PageDisplayVenue from './PageDisplayVenue'
export default class PageDisplay extends React.Component {
  render() {


    var mainPage =    <div style={{
          height: '100%',
          margin: '50px 0px 75px 0px',
          backgroundImage: 'url("../../app/images/maxiDiamond.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}>
        </div>

    var venuePage = <PageDisplayVenue />

    return (
      <div className={styles.page.verticalAlign} style={{
          height: '100%'
      }}>
        {venuePage}
      </div>
    );
  }
}


        // <div style={{
        //   height: '100vh',
        //   margin: '50px 0px 75px 0px',
        //   backgroundImage: 'url("../../app/images/maxiDiamond.png")',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'contain'
        // }}>
      	// </div>

      	// <Typist avgTypingDelay={10} stdTypingDelay={10}>
      	// 	{watsonText}
      	// </Typist>
