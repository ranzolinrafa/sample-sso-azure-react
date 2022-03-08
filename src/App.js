import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { useHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { msalConfig } from './config/msalConfig';

import { AuthProvider } from './contexts/AuthContext';
import { CustomNavigationClient } from './utils/NavigationClient';

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';
import Navigation from './components/Navigation';

const pca = new PublicClientApplication(msalConfig);

function App() {
	const history = useHistory();
	const navigationClient = new CustomNavigationClient(history);
	pca.setNavigationClient(navigationClient);

	return (
		<MsalProvider instance={pca}>
			<MsalAuthenticationTemplate
				interactionType={InteractionType.Redirect}
			>
				<AuthProvider>
					<Router>
						<Navigation />
						<Routes />
					</Router>
				</AuthProvider>
			</MsalAuthenticationTemplate>
		</MsalProvider>
	);
}

export default App;
