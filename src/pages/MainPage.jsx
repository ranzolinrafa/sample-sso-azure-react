import {
	AuthenticatedTemplate,
	UnauthenticatedTemplate,
} from '@azure/msal-react';
import { Alert, Button, Container } from 'react-bootstrap';

import { useAuth } from '../contexts/AuthContext';

import SignInSignOutButton from '../components/SignInSignOutButton';

import UserData from '../components/UserData';

export default function MainPage() {
	const { user, editAccount, changePassword } = useAuth();

	return (
		<Container>
			<AuthenticatedTemplate>
				<div className="d-grid gap-2">
					<Button onClick={() => editAccount()}>Edit Account</Button>
					<Button onClick={() => changePassword()}>
						Change Password
					</Button>
					<Alert variant="success" style={{ overflow: 'hidden' }}>
						<Alert.Heading>You are logged-in!</Alert.Heading>
						<UserData user={user} />
						<SignInSignOutButton />
					</Alert>
				</div>
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<Alert variant="secondary">
					<Alert.Heading>Você precisa fazer o login</Alert.Heading>
					<p>
						Clique no botão Sign-in na navegação ou no botão abaixo
						para continuar com o fluxo de SSO. Você será
						redirecionado de volta para esta página depois de
						efetuar o login.
					</p>
					<SignInSignOutButton />
				</Alert>
			</UnauthenticatedTemplate>
		</Container>
	);
}
