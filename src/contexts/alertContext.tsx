import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {Message} from '../components';

type AlertActions = {
    message: string;
    setMessage: (message: string) => void;
    setOpen: (open: boolean) => void;
}

const defaultState: AlertActions = {
	message: '',
	setMessage: (message: string) => console.log(message),
	setOpen: (open: boolean) => console.log(open),
};

export const AlertContext = createContext(defaultState);

type SearchProviderProps = {
    children: ReactNode;
}
export const AlertProvider = ({children}: SearchProviderProps) => {

	const [message, setMessage] = useState('');
	const [open, setOpen] = useState<boolean>();
	
	useEffect(() => {
		const timeout = setTimeout(() => {
			setOpen(false);
			clearTimeout(timeout);
		}, 3000);
	}, [open]);

	return <AlertContext.Provider value={{ message, setMessage, setOpen }}>
		<div className='fixed top-5 left-5 z-[100]'>
			<Message message={message} isOpened={open}/>
		</div>
		{children}
	</AlertContext.Provider>;
};
