import React from 'react';
import SiteMapIcon from './SiteMapIcon';
import RemindersBox from './RemindersBox';
import SuggestionsBox from './SuggestionsBox';
import styles from '../../styles/indexStyles'

export default class SideBarDisplay extends React.Component {
  render() {
    return (
      <div className={styles.sideBar.verticalAlign}
        style={{
          backgroundImage: 'url("../../app/images/Side Bar")',
          backgroundRepeat: 'no-repeat'
          backgroundSize: 'contain'
        }}>
        // <SiteMapIcon />
        // <RemindersBox />
        // <SuggestionsBox />
      </div>
    );
  }
}
