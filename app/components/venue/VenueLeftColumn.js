import React from 'react';
import VenueContactInfo from './VenueContactInfo'
import VenueTerms from './VenueTerms'
export default class VenueLeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''

    };
    this.handleMount = this.handleMount.bind(this)
  }
    handleMount() {
      var that = this
      console.log('yay?')
      setTimeout(function() {
        that.setState({
          text: that.props.watsonText
        })
      }, 200)      
    }

    componentDidMount() {
      this.handleMount()
    }
  render() {
    return (
      <div className='col-sm-6' style={{
      	height: '74%',
        display: 'block'
      }}>
	      <VenueContactInfo contactName={this.props.contactName} contactNumber={this.props.contactNumber}/>
	      <VenueTerms text={this.state.text}/>
      	
      </div>
    );
  }
}
