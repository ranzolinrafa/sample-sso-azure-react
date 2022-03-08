import { Switch } from 'react-router-dom';
import Route from './Route';

import MainPage from '../pages/MainPage';
import PublicPage from '../pages/PublicPage';
import PrivatePage from '../pages/PrivatePage';
import UnauthorizedPage from '../pages/UnauthorizedPage';

export default function Routes() {
	return (
		<Switch>
			<Route path="/private-page" component={PrivatePage} isPrivate />
			<Route path="/public-page" component={PublicPage} />
			<Route path="/unauthorized" component={UnauthorizedPage} />
			<Route path="/" component={MainPage} />
		</Switch>
	);
}
