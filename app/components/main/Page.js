import React from 'react';
import SideBarDisplay from '../sidebar/SideBarDisplay'
import PageDisplay from './PageDisplay';
import styles from '../../styles/indexStyles'

export default class Page extends React.Component {

  render() {
    return (
      <div>
        <SideBarDisplay />
        <PageDisplay onPayChange={this.props.onHandlePayChange} pay={this.props.pay}/>
      </div>
    );
  }
}
