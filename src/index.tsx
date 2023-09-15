import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Providers} from './components';

import './styles/_global.scss';

import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas, far);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Providers>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Providers>
	</React.StrictMode>
);