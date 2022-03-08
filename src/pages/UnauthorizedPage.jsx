import { Button, Alert, Container } from 'react-bootstrap';

export default function UnauthorizedPage() {
	function handleClick() {
		// console.log('click');
	}

	return (
		<Container>
			<Alert variant="danger">
				<Alert.Heading>Não autorizado!</Alert.Heading>

				<p>Faça o sign-in para ter acesso a este conteúdo</p>
				<Button variant="primary" onClick={handleClick}>
					Sign-In
				</Button>
			</Alert>
		</Container>
	);
}
