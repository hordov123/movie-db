import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {useDebounce} from 'usehooks-ts';

type SearchActions = {
    page: number;
    search: string;
	debouncedSearch: string;
    setPage: (page: number) => void;
    setSearch: (search: string) => void;
}

const defaultState: SearchActions = {
	page: 1,
	search: '',
	debouncedSearch: '',
	setPage: (page: number) => console.log(page),
	setSearch: (search: string) => console.log(search),
};

export const SearchContext = createContext(defaultState);

type SearchProviderProps = {
    children: ReactNode;
}
export const SearchProvider = ({children}: SearchProviderProps) => {

	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce<string>(search, 500);

	useEffect(() => {
		setPage(1);
	}, [debouncedSearch]);

	return <SearchContext.Provider value={{ page, search, debouncedSearch, setPage, setSearch }}>
		{children}
	</SearchContext.Provider>;
};
