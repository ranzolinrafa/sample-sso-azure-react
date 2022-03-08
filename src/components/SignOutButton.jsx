import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { Button } from 'react-bootstrap';

export default function SignOutButton() {
	const { logout } = useContext(AuthContext);

	return <Button onClick={() => logout()}>Sign-Out</Button>;
}
