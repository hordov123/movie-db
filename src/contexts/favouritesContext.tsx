import React, {createContext, ReactNode, useContext} from 'react';
import {useLocalStorage} from 'usehooks-ts';
import {SearchedMovie} from '../types/MovieSearch';
import {AlertContext} from './alertContext';


type FavouritesActions = {
	favourites: (SearchedMovie)[]
	handleFavourites: (data: SearchedMovie) => void;
}

const defaultState: FavouritesActions = {
	favourites: [],
	handleFavourites: (data: SearchedMovie) => console.log(data),
};

export const FavouritesContext = createContext(defaultState);

type FavouritesProviderProps = {
    children: ReactNode;
}
export const FavouritesProvider = ({children}: FavouritesProviderProps) => {

	const {setMessage, setOpen} = useContext(AlertContext);

	const [favourites, setFavourites] = useLocalStorage<(SearchedMovie)[]>('favourites', []);

	const handleFavourites = (data: SearchedMovie) => setFavourites(prevState => {
		if (prevState.filter(item => item?.imdbID === data?.imdbID).length) {
			setMessage('Movie has been removed');
			setOpen(true);
			return prevState.filter(item => item?.imdbID !== data?.imdbID);
		}

		setMessage('Movie has been added');
		setOpen(true);
		return [...prevState, data];
	});

	return <FavouritesContext.Provider value={{ handleFavourites, favourites }}>
		{children}
	</FavouritesContext.Provider>;
};
