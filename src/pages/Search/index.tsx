import {MainMessage, MovieList, SearchNavigation, SearchPagePagination, SkeletonLoading} from '../../components';
import React, {useContext, useEffect} from 'react';
import {useGetMovieSearch} from '../../hooks';
import {AlertContext, SearchContext} from '../../contexts';


const SearchPage = () => {
	const {page, debouncedSearch} = useContext(SearchContext);
	const {setMessage, setOpen} = useContext(AlertContext);

	const {data, refetch, isRefetching, isLoading, isError} = useGetMovieSearch({
		movieTitle: debouncedSearch, page: page, options: {
			enabled: false,
			keepPreviousData: true,
			onError: () => {
				setMessage('There seems to be an error, please wait.');
				setOpen(true);
			}
		}
	});

	useEffect(() => {
		if (debouncedSearch && debouncedSearch.length > 2) refetch();
	}, [debouncedSearch, page]);

	return <>
		<SearchNavigation isLoading={isRefetching || isLoading}/>


		<SkeletonLoading.MoviesList isLoading={isRefetching || isLoading}/>
		<MovieList showCondition={!isRefetching && !isLoading} movies={data?.data.Search}/>

		<MainMessage showCondition={!data?.data.Search && !isRefetching && !isLoading && !isError && data?.data.Error !== 'Movie not found!'} message={'Search for your favourite movie :)'}/>
		<MainMessage showCondition={!data?.data.Search && !isRefetching && !isLoading && !isError && data?.data.Error === 'Movie not found!'} message={'We have found no movie with this title :('}/>
		<MainMessage showCondition={!data?.data.Search && !isRefetching && !isLoading && isError && data?.data.Error === 'Movie not found!'} message={'There seems to be an error, please have patience :('}/>

		{data?.data.Search && <SearchPagePagination totalResults={parseInt(data?.data.totalResults)}/>}
	</>;
};

export default SearchPage;