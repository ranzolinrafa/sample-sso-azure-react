import { useContext } from 'react';
import { Route as RouterDomRoute, Redirect } from 'react-router-dom';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';

import { AuthContext } from '../contexts/AuthContext';

export default function Route({
	component: Component,
	isPrivate = false,
	...rest
}) {
	const { inProgress } = useMsal();
	const isAuthenticated = useIsAuthenticated();
	const { login } = useContext(AuthContext);

	if (isPrivate && !isAuthenticated) {
		if (inProgress !== 'handleRedirect' && inProgress !== 'startup') {
			login();
		}
		// return <Redirect to="/unauthorized" />;
	}

	return (
		<RouterDomRoute {...rest} render={props => <Component {...props} />} />
	);
}
