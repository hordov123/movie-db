import {useQuery, UseQueryOptions} from 'react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {apiGet} from '../../services/apiService';
import {SearchMovieResult} from '../../types/MovieSearch';
import {QUERYKEYS} from '../../constants/queryKeys';

interface GetMovieSearchProps {
    movieTitle: string | undefined;
    page: number;
}

const getMovieSearch = ({movieTitle, page}: GetMovieSearchProps) => apiGet({ queryParams: [`s=${movieTitle}`, `page=${page}`]});

type UseGetMovieSearch = {
    movieTitle: string | undefined;
    page: number;
    options: UseQueryOptions<AxiosResponse<GetMovieSearchProps>, AxiosError, AxiosResponse<SearchMovieResult>, ( string | number | undefined )[]>
}

export const useGetMovieSearch = ({movieTitle, page, options = {}}: UseGetMovieSearch) => {
	return useQuery([QUERYKEYS.SEARCH, movieTitle, page], () => getMovieSearch({movieTitle, page}), {
		...options
	});
};