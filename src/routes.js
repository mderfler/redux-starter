import React from 'react';
import {Route, IndexRoute} from 'react-router';
import ContactDetail from './containers/contact_detail';

import App from './components/app';
import Index from './containers/index';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={Index} />//shows only Index when route = /
		<Route path="detail" component={ContactDetail} />
	</Route>
);

