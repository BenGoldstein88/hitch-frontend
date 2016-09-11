import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

export default class EventNavBar extends React.Component {

  render() {

	var activeKey = this.props.event
    return (
			<Navbar style={{'marginBottom': '0px'}}>
				<Navbar.Collapse>
					<Nav activeKey={activeKey}>
						<NavItem eventKey={'rehearsal'} onSelect={this.props.onEventChange} href='#'>Rehearsal</NavItem>
						<NavItem eventKey={'wedding'} onSelect={this.props.onEventChange} href='#'>Wedding</NavItem>
						<NavItem eventKey={'brunch'} onSelect={this.props.onEventChange} href='#'>Brunch</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>	
		);
	}
}

