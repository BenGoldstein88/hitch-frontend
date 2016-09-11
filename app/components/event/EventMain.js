import React from 'react';
import EventNavBar from '../navbar/EventNavBar'
import Page from '../main/Page'

export default class EventMain extends React.Component {
  render() {
    return (
      <div>
      <EventNavBar onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
<<<<<<< HEAD
      <Page display={this.props.display} onDisplayChange={this.props.onDisplayChange} onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
=======
      <Page onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event} onPayChange={this.props.onHandlePayChange} pay={this.props.pay}/>
>>>>>>> 709ee9fd74a17b552b501573c0b003be58841093
      </div>
    );
  }
}
