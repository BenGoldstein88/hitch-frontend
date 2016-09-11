import React from 'react';

export default class VenueContactInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      email: ''

    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)

    this.handleMount = this.handleMount.bind(this)

  }
  handleMount() {
    console.log('what?')
    var that = this
    setTimeout(function() {
      that.setState({
        name: that.props.contactName
      })
    }, 3000)
    setTimeout(function() {
      that.setState({
        number: that.props.contactNumber
      })
    }, 4000)
    setTimeout(function() {
      that.setState({
        email: 'NONE_FOUND'
      })
    }, 5000)
  }
  componentDidMount() {
    this.handleMount()
  }

  handleNameChange(name) {
    this.setState({
      name: name
    })
  }
  handleNumberChange(number) {
    this.setState({
      number: number
    })
  }
  handleEmailChange(email) {
    this.setState({
      email: email
    })
  }
  render() {
    return (
      <div style={{
      	display: 'block',
      	width: '100%',
        height: '40%',
        fontFamily: 'Raleway'
      }}>
      	<h2 style={{fontFamily: 'Raleway'}}>CONTACT INFO: </h2>
        <input onChange={this.handleNameChange}value={this.state.name}type='text' style={{background: 'rgba(254, 149, 125, 0.2)', width: '75%', marginRight: '20%',
        marginLeft: '10%'}} />
        <input onChange={this.handleNumberChange}value={this.state.number}type='text' style={{background: 'rgba(254, 149, 125, 0.2)', width: '75%', marginRight: '20%',
        marginLeft: '10%'}} />
        <input onChange={this.handleEmailChange}value={this.state.email}type='text' style={{background: 'rgba(254, 149, 125, 0.2)', width: '85%',
        marginLeft: '10%'}} />
      </div>
    );
  }
}
