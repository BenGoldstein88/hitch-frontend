import React from 'react';
import HitchNavBar from './navbar/HitchNavBar'
import AppMain from './AppMain';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	tool: 'home',
    	event: 'wedding',
      display: 'home',
      pay: false
    };
    this.handleToolChange = this.handleToolChange.bind(this)
    this.handleEventChange = this.handleEventChange.bind(this)
    this.handleDisplayChange = this.handleDisplayChange.bind(this)
    this.handlePayChange = this.handlePayChange.bind(this)
  }

  handleDisplayChange(display) {
    this.setState({
      display: display
    })
  }
  handleEventChange(eventName) {
  	this.setState({
  		event: eventName
  	})
  }

  handleToolChange(toolName) {
  	this.setState({
  		tool: toolName
  	})
  }

  handlePayChange() {
    this.setState({
      pay: !this.state.pay
    })
  }

  render() {
    return (
      <div>
      <div style={{
        height: '110px',
        backgroundImage: 'url("../../app/images/topBar.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '101% 100%'
        }}>
      </div>

	    <AppMain onDisplayChange={this.handleDisplayChange} display={this.state.display} onToolChange={this.handleToolChange} tool={this.state.tool} onEventChange={this.handleEventChange} event={this.state.event} onPayChange={this.handlePayChange} pay={this.state.pay} />
      </div>
    );
  }
}
