import React from 'react';

export default class FileUploadForm extends React.Component {


	handleFormSubmit(e) {
		// e.preventDefault();
	}
  render() {
    return (
      <div>
      	<form encType='multipart/form-data' action='https://gateway.watsonplatform.net/document-conversion/api' method='POST' onSubmit={this.handleFormSubmit}>
      		<input type='file' />
      		<input type='submit' value='Upload pdf' />
      	</form>
      </div>
    );
  }
}
