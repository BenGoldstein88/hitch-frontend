import React from 'react';
import SideBarDisplay from '../sidebar/SideBarDisplay'
import PageDisplay from './PageDisplay';
import styles from '../../styles/indexStyles'

export default class Page extends React.Component {

  render() {
    return (
      <div>
        <SideBarDisplay />
        <PageDisplay display={this.props.display} onDisplayChange={this.props.onDisplayChange} onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event} onPayChange={this.props.onHandlePayChange} pay={this.props.pay}/>

      </div>
    );
  }
}
