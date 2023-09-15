import React, {useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useGetMovieDetail} from '../../hooks';
import {FavouriteButton, MainMessage, SearchNavigation, SkeletonLoading} from '../../components';
import {AlertContext} from '../../contexts';

const DetailPage = () => {
	const {movieId} = useParams();
	const navigate = useNavigate();
	
	const {setMessage, setOpen} = useContext(AlertContext);

	const {data, isError} = useGetMovieDetail({movieId, options: {
		onError: () => {
			setMessage('There seems to be an error, please wait.');
			setOpen(true);
		}
	}});

	const movie = data?.data;

	if (movie && !movie.Error) return <>
		<SearchNavigation searchOverride={() => navigate('/')}/>
		<div className='max-w-[30rem] md:max-w-[70rem] mx-auto px-10'>
			<div className='bg-foreground border border-white/5 rounded-2xl overflow-hidden mt-20 flex flex-col md:flex-row h-fit'>
				{movie.Poster !== 'N/A' && <img src={movie.Poster} alt={`${movie.Title} poster`}/>}
				<div className='p-4'>
					<div className='flex justify-between'>
						<h2>{movie.Title}</h2>
						<FavouriteButton Poster={movie.Poster} Title={movie.Title} Type={movie.Type} Year={movie.Year} imdbID={movie.imdbID}/>
					</div>
					<div className='flex gap-2 mt-8'>
						{movie?.Genre.split(',').map(genere => <div key={genere} className='capitalize bg-accent px-3 rounded-full py-1'>
							{genere}
						</div>)}
					</div>

					<p className='mt-4'>{parseFloat(movie?.imdbRating)*10}% by {movie?.imdbVotes} users, {movie?.Rated}</p>

					<div className='flex gap-1.5 mt-4'>
						<p>{movie?.Country},</p>
						<p>{movie.Year},</p>
						<p>{movie.Runtime}</p>
					</div>

					<p className='mt-6 w-full'>{movie?.Plot}</p>
					<p className='mt-8 font-bold'>Director:<span className='text-primary font-medium'> {movie?.Director}</span></p>
					<p className='font-bold'>Writers:<span className='text-primary font-medium'> {movie?.Writer}</span></p>
					<p className='font-bold'>Stars:<span className='text-primary font-medium'> {movie?.Actors}</span></p>
				</div>
			</div>
		</div>
	</>;

	return <>
		<SearchNavigation/>
		<MainMessage showCondition={isError || !!movie?.Error} message={'There seems to be an error, please have patience :('}/>
		{!isError && <div className='h-fit max-w-[30rem] md:max-w-[70rem] mx-auto px-10 mt-20'>
			<SkeletonLoading isLoading={true}/>
		</div>}
	</>;
};

export default DetailPage;
