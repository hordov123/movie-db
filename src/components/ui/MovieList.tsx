import React from 'react';
import {MovieCard} from './MovieCard';
import {SearchedMovie} from '../../types/MovieSearch';

type MovieListProps = {
    showCondition: boolean;
    movies: SearchedMovie[] | undefined;
}

export const MovieList = ({ showCondition, movies }: MovieListProps) => {

	if (showCondition && movies && !!movies.length) return <div className='movies-list'>
		{movies.map(movie => <div key={movie.imdbID}>
			<MovieCard {...movie}/>
		</div>)}
	</div>;

	return <></>;
};