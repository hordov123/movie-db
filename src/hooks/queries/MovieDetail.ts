import {apiGet} from '../../services/apiService';
import {useQuery, UseQueryOptions} from 'react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {MovieDetail} from '../../types/MovieDetail';
import {QUERYKEYS} from '../../constants/queryKeys';

interface GetMovieDetailProps {
    movieId: string | undefined;
}

const getMovieDetail = ({movieId}: GetMovieDetailProps) => apiGet({ queryParams: [`i=${movieId}`]});

type UseGetMovieDetail = {
    movieId: string | undefined;
    options: UseQueryOptions<AxiosResponse<GetMovieDetailProps>, AxiosError, AxiosResponse<MovieDetail>, (string | undefined)[]>
}

export const useGetMovieDetail = ({movieId, options = {}}: UseGetMovieDetail) => {
	return useQuery([QUERYKEYS.DETAIL, movieId], () => getMovieDetail({movieId}), {
		...options
	});
};