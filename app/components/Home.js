import React from 'react';
import HitchNavBar from './navbar/HitchNavBar'
import AppMain from './AppMain';

export default class Home extends React.Component {

  render() {
    return (

      <div>
      <HitchNavBar />
      <AppMain />

      </div>
    );
  }
}

