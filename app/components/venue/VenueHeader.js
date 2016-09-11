import React from 'react';
import styles from '../../styles/indexStyles';

export default class VenueHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: ''

    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleMount = this.handleMount.bind(this)

  }
  handleMount() {
    var that = this
    console.log('hello?')
    setTimeout(function() {
      that.setState({
        name: that.props.venueName
      })
    }, 1000)

    setTimeout(function() {
      that.setState({

        address: that.props.venueAddress
      })
    }, 2000)
  }
  componentDidMount() {
    this.handleMount()
  }
  handleNameChange(name) {
    this.setState({
      name: this.state.name
    })
  }
  handleAddressChange(address) {
    this.setState({
      address: this.state.address
    })
  }
  render() {
    return (
      <div className={styles.venueTop.textAlign}
        style={{
      	height: '12.5%',
      	width: '100%',
        fontFamily: 'Raleway',
        paddingLeft: '250px',
        marginTop: '20px'
      }}>
      	<input value={this.state.name}type='text' onChange={this.handleNameChange} style={{
      		background: 'transparent',
      		border: 'none',
      		display: 'block',
          width: '50%',
          fontSize: '20px',
          paddingLeft: '40px'
      	}} />
      	<input value={this.state.address}type='text' onChange={this.handleAddressChange}style={{
      		background: 'transparent',
      		border: 'none',
      		display: 'block',
          width: '70%',
          fontSize: '16px'
      	}} />
      </div>
    );
  }
}
