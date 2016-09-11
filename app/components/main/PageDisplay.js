import React from 'react';
import styles from '../../styles/indexStyles'
// import FileUploadForm from '../venue/FileUploadForm'
import Typist from 'react-typist';

export default class PageDisplay extends React.Component {
  render() {
    return (
      <div className={styles.page.verticalAlign} style={{
      		border: '1px dashed black',
      		height: '100%'
      }}>
      	<Typist avgTypingDelay={10} stdTypingDelay={10}>
      		<h1> Main Display! My Name is Umar and I'm not great at racquet sports. </h1>
      	</Typist>
      </div>
    );
  }
}
