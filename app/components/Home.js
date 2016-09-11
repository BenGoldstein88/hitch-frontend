import React from 'react';
import HitchNavBar from './navbar/HitchNavBar'
import AppMain from './AppMain';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	tool: 'home',
    	event: 'wedding'

    };
    this.handleToolChange = this.handleToolChange.bind(this)
    this.handleEventChange = this.handleEventChange.bind(this)

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

  render() {
    return (
      <div>
      <div style={{
        height: '120px',
        backgroundImage: 'url("../../app/images/topBar.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '101% 100%'
        }}>
      </div>
	    <AppMain onToolChange={this.handleToolChange} tool={this.state.tool} onEventChange={this.handleEventChange} event={this.state.event} />
      </div>
    );
  }
}
