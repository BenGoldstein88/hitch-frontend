import React from 'react';
import ToolNavBar from './navbar/ToolNavBar'
import EventMain from './event/EventMain';

export default class AppMain extends React.Component {
  render() {
    return (
      <div>
	      <ToolNavBar onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
	      <EventMain display={this.props.display} onDisplayChange={this.props.onDisplayChange} onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event} onPayChange={this.props.onPayChange} pay={this.props.pay}/>
      </div>
    );
  }
}
