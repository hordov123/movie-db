import {QueryClient, QueryClientProvider} from 'react-query';
import React, {ReactNode} from 'react';
import {AlertProvider, FavouritesProvider, SearchProvider} from '../contexts';

const queryClient = new QueryClient();

type ProvidersProps = {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
	return <QueryClientProvider client={queryClient}>
		<AlertProvider>
			<FavouritesProvider>
				<SearchProvider>
					{children}
				</SearchProvider>
			</FavouritesProvider>
		</AlertProvider>
	</QueryClientProvider>;
};