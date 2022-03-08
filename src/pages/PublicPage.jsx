import { Alert, Container } from 'react-bootstrap';

export default function PublicPage() {
	return (
		<Container>
			<Alert variant="dark">
				<Alert.Heading>Esta é uma página pública</Alert.Heading>
				<p>
					Isto significa que qualquer usuário, independente de estar
					logado ou não, pode visualizar este conteúdo
				</p>
			</Alert>
		</Container>
	);
}
