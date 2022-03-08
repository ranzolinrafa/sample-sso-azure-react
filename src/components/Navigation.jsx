import { useIsAuthenticated } from '@azure/msal-react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

import SignInSignOutButton from './SignInSignOutButton';
import HeaderUserInfo from './HeaderUserInfo';

export default function Navigation() {
	const isAuthenticated = useIsAuthenticated();

	return (
		<Navbar bg="light" expand="lg" style={{ marginBottom: 32 }}>
			<Container>
				<Navbar.Brand>SSO Azure B2C</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link to="/private-page" className="nav-link">
							Private Page
						</Link>
						<Link to="/public-page" className="nav-link">
							Public Page
						</Link>
					</Nav>
					<div style={{ marginRight: 24 }}>
						{isAuthenticated && <HeaderUserInfo />}
					</div>
					<SignInSignOutButton />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
