import React, {SyntheticEvent} from 'react';
import {SearchedMovie} from '../../types/MovieSearch';
import {useNavigate} from 'react-router-dom';
import MissingImage from '../../assets/images/missing.jpg';
import {FavouriteButton} from './FavouriteButton';

const onImageError = (e: SyntheticEvent<HTMLImageElement>) => {
	e.currentTarget.src = MissingImage;
};

export const MovieCard = (movie: SearchedMovie) => {
	const navigate = useNavigate();


	return <div onClick={() => navigate('/detail/' + movie.imdbID)} className='relative shard cursor-pointer overflow-hidden group hover:[&>img]:scale-125
	after:bg-primary after:w-1 after:absolute'>
		<img src={movie.Poster} onError={onImageError} className='h-96 w-72 group-hover:scale-110 duration-500' alt={`${movie.Title} poster`}/>
		<div className='absolute bottom-0 py-2 grid pt-36 gap-3 px-3 bg-gradient-to-t from-background via-foreground to-80% to-transparent w-full'>
			<h3>{movie.Title}</h3>
			<div className='flex justify-between items-center'>
				<p>{movie.Year}</p>
				<p className='capitalize'>{movie.Type}</p>
				<FavouriteButton {...movie}/>
			</div>
		</div>
	</div>;
};