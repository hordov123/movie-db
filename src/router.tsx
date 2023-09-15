import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from './constants/routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SearchPage = lazy(() => import('./pages/Search'));
const DetailPage = lazy(() => import('./pages/Detail'));
const FavouritesPage = lazy(() => import('./pages/Favourites'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Router = () => {
	return <Suspense fallback={<div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'><FontAwesomeIcon className='text-5xl text-accent' icon='circle-notch' spin/></div>}>
		<Routes>
			<Route path={ROUTES.SEARCH} element={<SearchPage />} />
			<Route path={ROUTES.DETAIL} element={<DetailPage />} />
			<Route path={ROUTES.FAVOURITES} element={<FavouritesPage />} />
			<Route path={ROUTES.ERROR} element={<NotFound />}/>
		</Routes>
	</Suspense>;
};

export default Router;