import React from 'react';
import EventNavBar from '../navbar/EventNavBar'
import Page from '../main/Page'

export default class EventMain extends React.Component {
  render() {
    return (
      <div>
      <EventNavBar />
      <Page />
      </div>
    );
  }
}
