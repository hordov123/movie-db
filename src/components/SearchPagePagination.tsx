import React, {useContext} from 'react';
import {SearchContext} from '../contexts';
import {Pagination, SxProps, Theme} from '@mui/material';

type PaginationProps = {
    totalResults: number;
}

export const SearchPagePagination = ({ totalResults }: PaginationProps) => {
	const {page, setPage} = useContext(SearchContext);
	const count = paginationCount(totalResults);

	return <Pagination className='pt-8'  count={count}  page={page} onChange={(e, p) => {
		setPage(p);
	}} color={'secondary'} sx={paginationStyle}/>;
};

const paginationCount = (totalResults: number) =>  Math.floor(totalResults/10) + (totalResults % 10 ? 1 : 0);

const paginationStyle:  SxProps<Theme> | undefined = {
	margin: 'auto',
	button: {
		color: '#fff',
		'&:hover': {
			backgroundColor: 'rgb(190,24,93)',
		},
	},
	'& .MuiPaginationItem-text': {
		color: 'white'
	}
};