import { useAuth } from '../contexts/AuthContext';

export default function HeaderUserInfo() {
	const { user } = useAuth();

	return (
		<div>
			<span>
				Welcome,{' '}
				<strong>
					{user && `${user.given_name} ${user.family_name}!`}
				</strong>
			</span>
		</div>
	);
}
