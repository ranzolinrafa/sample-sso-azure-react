import { useState } from 'react';
import { Alert, Container, Button } from 'react-bootstrap';
import api from '../services/api';

export default function PrivatePage() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	function handleClick() {
		setLoading(true);
		api.get('https://random-data-api.com/api/beer/random_beer')
			.then(res => {
				setData(res.data);
				setLoading(false);
			})
			.catch(err => console.log(err));
	}

	return (
		<Container>
			<Alert variant="success">
				<Alert.Heading>Esta é uma página privada</Alert.Heading>
				<p>
					Isto significa que apenas usuários logados com SSO Azure B2C
					podem visualizar o conteúdo desta página.
				</p>

				<Button variant="primary" onClick={handleClick}>
					Make API request
				</Button>

				{loading && (
					<span style={{ display: 'block', marginTop: 24 }}>
						Loading...
					</span>
				)}

				{data && !loading && (
					<div style={{ marginTop: 24 }}>
						<pre>{JSON.stringify(data, null, 2)}</pre>
					</div>
				)}
			</Alert>
		</Container>
	);
}
