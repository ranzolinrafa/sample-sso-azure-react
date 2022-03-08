export const b2cPolicies = {
	names: {
		signUpSignIn: 'B2C_1_susi_reset_v2',
		editProfile: 'B2C_1_edit_profile_v2',
	},
	authorities: {
		signUpSignIn: {
			authority:
				'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_susi_reset_v2',
		},
		editProfile: {
			authority:
				'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/B2C_1_edit_profile_v2',
		},
	},
	authorityDomain: 'fabrikamb2c.b2clogin.com',
};
