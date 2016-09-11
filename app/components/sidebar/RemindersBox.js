import React from 'react';

export default class RemindersBox extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      allChecked: false,
      checkedCount: 0,
      options: [
        { value: 'task1', text: 'ASK FOR NEW PROPOSAL' },
        { value: 'task2', text: 'LOOK UP FLIGHTS' },
        { value: 'task3', text: 'RESEARCH TAILOR' },
        { value: 'task4', text: 'CHOOSE INVITATIONS'}
        ]
    };
  };

  handleClick(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div style={{
        border: '1px green solid',
        height: '33.3%'
      }}>
        <select value={this.state.value} onChange={this.onChange}>
          <option value='task1'>ASK FOR NEW PROPOSAL</option>
          <option value='task2'>LOOK UP FLIGHTS</option>
          <option value='task2'>LOOK UP FLIGHTS</option>
          <option value='task2'>LOOK UP FLIGHTS</option>
        </select>
    </div>

    );
  }
}
