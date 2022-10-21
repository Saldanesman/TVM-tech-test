import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home/Home';

const NoMatch = React.lazy(() => import('../pages/NoMatch/NoMatch'));
const Bikes = React.lazy(() => import('../pages/Bikes/Bikes'));

const Content = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path={'/'} element={<Home />} />
			<Route
				path={'/bikes'}
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<Bikes />
					</React.Suspense>
				}
			/>
			<Route
				path={'*'}
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<NoMatch />
					</React.Suspense>
				}
			/>
		</Routes>
	);
};

export default Content;
