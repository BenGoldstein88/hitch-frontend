import React from 'react';
import ToolNavBar from './navbar/ToolNavBar'
import EventMain from './event/EventMain';

export default class AppMain extends React.Component {
  render() {
    return (
      <div>
	      <ToolNavBar onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
<<<<<<< HEAD
	      <EventMain display={this.props.display} onDisplayChange={this.props.onDisplayChange} onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
=======
	      <EventMain onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event} onPayChange={this.props.onHandlePayChange} pay={this.props.pay}/>
>>>>>>> 709ee9fd74a17b552b501573c0b003be58841093
      </div>
    );
  }
}
