import React from 'react';
import SideBarDisplay from '../sidebar/SideBarDisplay'
import PageDisplay from './PageDisplay';
import styles from '../../styles/indexStyles'

export default class Page extends React.Component {

  render() {
    return (
      <div>
        <SideBarDisplay />
<<<<<<< HEAD
        <PageDisplay display={this.props.display} onDisplayChange={this.props.onDisplayChange} onToolChange={this.props.onToolChange} tool={this.props.tool} onEventChange={this.props.onEventChange} event={this.props.event}/>
=======
        <PageDisplay onPayChange={this.props.onHandlePayChange} pay={this.props.pay}/>
>>>>>>> 709ee9fd74a17b552b501573c0b003be58841093
      </div>
    );
  }
}
