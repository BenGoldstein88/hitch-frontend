import React from 'react';
import ToolNavBar from './navbar/ToolNavBar'
import EventMain from './event/EventMain';

export default class AppMain extends React.Component {
  render() {
    return (
      <div>
      <ToolNavBar />
      <EventMain />
      </div>
    );
  }
}
