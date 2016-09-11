import React from 'react';
import styles from '../../styles/indexStyles';

export default class RemindersBox extends React.Component {
  // constructor(props, context) {
  //   super(props, context);

  //   this.state = {
  //     checked: false,
  //   };

  //   this.handleClick = this.handleClick.bind(this);

  // };

  // handleClick() {
  //   this.setState({checked: !this.state.checked});
  // }
  render() {
    return (
      <div style={{
        border: '1px green solid',
        height: '33.3%',
        backgroundImage: 'url("../../app/images/reminders.png")'
      }}>

      // <form className={styles.suggiestionBox.horizontal}>
      //   <label><input type="checkbox" name="task1"/>
      //   ASK FOR A PROPOSAL</label>
      //   <label><input type="checkbox" name="task2"/>
      //   BOOK A FLIGHT</label>
      //   <label><input type="checkbox" name="task3"/>
      //   STUFF</label>
      //   <label><input type="checkbox" name="task4"/>
      //   ASK FOR A PROPOSAL</label>
      // </form>
    </div>

    );
  }
}
