export default function UserData({ user }) {
	return (
		<div>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	);
}
