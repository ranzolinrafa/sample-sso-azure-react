import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { Button } from 'react-bootstrap';

export default function SignInButton() {
	const { login } = useContext(AuthContext);
	return <Button onClick={() => login()}>Sign-In</Button>;
}
