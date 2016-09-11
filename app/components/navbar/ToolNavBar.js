import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
export default class ToolNavBar extends React.Component {
  render() {
		var activeKey = this.props.tool

		return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Collapse>
					<Nav activeKey={activeKey}>
						<NavItem eventKey={'checklist'} onSelect={this.props.onToolChange} href='#'>Checklist </NavItem>
						<NavItem eventKey={'budget'} onSelect={this.props.onToolChange} href='#'>Budget </NavItem>
						<NavItem eventKey={'timeline'} onSelect={this.props.onToolChange} href='#'>Timeline </NavItem>
						<NavItem eventKey={'guestlist'} onSelect={this.props.onToolChange} href='#'>Guest List </NavItem>
						<NavItem eventKey={'reminders'} onSelect={this.props.onToolChange} href='#'>Reminders </NavItem>
						<NavItem eventKey={'seatingchart'} onSelect={this.props.onToolChange} href='#'>Seating Chart </NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
  }
}
