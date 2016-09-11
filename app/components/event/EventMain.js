import React from 'react';
import EventNavBar from '../navbar/EventNavBar'
import Page from '../main/Page'

export default class EventMain extends React.Component {
  render() {
    return (
      <div>
      <EventNavBar onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
      <Page onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event} onPayChange={this.props.onHandlePayChange} pay={this.props.pay}/>
      </div>
    );
  }
}
