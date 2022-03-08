import { createContext, useContext, useEffect, useState } from 'react';
import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';

import api from '../services/api';

import { b2cPolicies } from '../config/b2cPolicies';
import { loginRequest } from '../config/msalConfig';

const AuthContext = createContext({ user: {} });

const AuthProvider = ({ children }) => {
	const { instance, accounts } = useMsal();
	const [user, setUser] = useState({});

	function setOnHeadersAndLocalStorage(token) {
		api.defaults.headers.authorization = `Bearer ${token}`;

		localStorage.setItem('@App:user', JSON.stringify(user));
		localStorage.setItem('@App:token', token);
	}

	function login() {
		instance.loginRedirect();
	}

	function logout() {
		instance.logoutPopup();
		localStorage.removeItem('@App:user');
		localStorage.removeItem('@App:token');
	}

	function changePassword() {
		const request = b2cPolicies.authorities.changePassword;
		request.loginHint = user.email;

		instance.loginRedirect(request).catch(error => {
			throw new Error(error);
		});
	}

	function editAccount() {
		const request = {
			authority: b2cPolicies.authorities.editProfile.authority,
			prompt: 'none',
		};
		request.loginHint = user.email;

		instance.loginRedirect(request).catch(error => {
			throw new Error(error);
		});
	}

	useEffect(() => {
		if (accounts.length === 0) {
			return false;
		}

		console.log(accounts);
		const account = accounts[0];
		const authority = b2cPolicies.authorities.signUpSignIn.authority;

		if (accounts.length > 0) {
			instance
				.acquireTokenSilent({
					authority,
					scopes: loginRequest.scopes,
					account,
					forceRefresh: true,
				})
				.then(response => {
					if (response) {
						setUser({
							...account.idTokenClaims,
							token: response.accessToken,
						});
						setOnHeadersAndLocalStorage(response.accessToken);
					}
				})
				.catch(err => {
					if (err instanceof InteractionRequiredAuthError) {
						const request = {
							authority,
							scopes: loginRequest.scopes,
							prompt: 'login',
						};
						return instance.acquireTokenRedirect(request);
					}
					throw Error(err);
				});
		}
	}, [accounts, instance]);

	return (
		<AuthContext.Provider
			value={{ user, login, logout, changePassword, editAccount }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	return context;
};

export { AuthContext, AuthProvider, useAuth };
