import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'

export default class HitchNavBar extends React.Component {
  render() {
    return (
		<Navbar style={{
			'marginBottom': '0px',
			'height': '20px'}}>
			<Navbar.Header>
				<Navbar.Brand>
					<Nav pullLeft>
						<NavItem eventKey={'home'} onSelect={this.props.onSelect} href='#'>Hitch</NavItem>
					</Nav>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem disabled={true}className='navbar-text'> Shrek & Fiona </NavItem>
					<NavItem eventKey={'settings'} href='#'>Settings</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    );
  }
}
