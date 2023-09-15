import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {FavouritesContext} from '../../contexts';
import {SearchedMovie} from '../../types/MovieSearch';

export const FavouriteButton = (movie: SearchedMovie) => {

	const { handleFavourites, favourites} = useContext(FavouritesContext);

	const handleFavouritesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		handleFavourites(movie);
	};
    
	return <button className={'duration-300 hover:scale-125 text-3xl hover:text-accent'}
		onClick={handleFavouritesClick}>
		{
			favourites.find(item => item?.imdbID === movie.imdbID) ?
				<FontAwesomeIcon className='text-accent' icon={solid('star')}/>
				:
				<FontAwesomeIcon className='text-secondary' icon={regular('star')}/>
		}
	</button>;
};