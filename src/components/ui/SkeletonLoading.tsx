import React from 'react';

type SkeletonLoadingProps = {
    isLoading: boolean;
}
export const SkeletonLoading = ({ isLoading }: SkeletonLoadingProps) => {
	return <div className='h-96 w-full animate-pulse bg-gray-700/50 rounded-2xl'/>;
};

const MoviesList = ({ isLoading }: SkeletonLoadingProps) => {

	if (isLoading) return <div className='movies-list'>
		{[...new Array(10)].map((_, index) => <div key={index} className='h-96 w-72 animate-pulse bg-gray-700/50'/>)}
	</div>;

	return <></>;
};

SkeletonLoading.MoviesList = MoviesList;