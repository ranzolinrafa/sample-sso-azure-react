import { LogLevel } from '@azure/msal-browser';

import { b2cPolicies } from './b2cPolicies';

export const msalConfig = {
	auth: {
		clientId: '2fdd06f3-7b34-49a3-a78b-0cf1dd87878e',
		authority: b2cPolicies.authorities.signUpSignIn.authority,
		knownAuthorities: [b2cPolicies.authorityDomain],
		redirectUri: 'http://localhost:3000',
	},
	cache: {
		cacheLocation: 'localStorage',
	},
	system: {
		loggerOptions: {
			loggerCallback: (level, message, containsPii) => {
				if (containsPii) {
					return;
				}
				// eslint-disable-next-line default-case
				switch (level) {
					case LogLevel.Error:
						// eslint-disable-next-line no-console
						console.error(message);
						return;
					case LogLevel.Info:
						// eslint-disable-next-line no-console
						console.info(message);
						return;
					case LogLevel.Verbose:
						// eslint-disable-next-line no-console
						console.debug(message);
						return;
					case LogLevel.Warning:
						// eslint-disable-next-line no-console
						console.warn(message);
				}
			},
		},
	},
};

export const loginRequest = {
	scopes: ['https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read'],
};
