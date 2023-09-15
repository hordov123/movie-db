import React, {useContext} from 'react';
import {FavouritesContext, SearchContext} from '../../contexts';
import {MainMessage, MovieList, SearchNavigation} from '../../components';

const FavouritesPage = () => {
	const { favourites } = useContext(FavouritesContext);
	const { search } = useContext(SearchContext);

	return <>
		<SearchNavigation/>
		<MovieList showCondition={!!favourites.length} movies={favourites.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()))}/>

		<MainMessage showCondition={!favourites.length} message={'There are no movies in your favorites :('}/>
		<MainMessage showCondition={!!favourites.length && !favourites.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase())).length}
			message={'There are no favourites with this name :('}/>
	</>;
};

export default FavouritesPage;