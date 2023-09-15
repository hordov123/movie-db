import React, {ReactElement} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

type NavButtonProps = {
    text: string;
    path: string;
    icon: ReactElement;
}

export const NavButton = ({ text, path, icon }: NavButtonProps) => {
	const location = useLocation();
	const navigate = useNavigate();

	return <button className={`bg-foreground w-10 h-10 sm:w-auto sm:h-auto sm:px-8 sm:py-2 flex gap-2 items-center rounded-full duration-300 
			${location.pathname === path ? 'bg-primary' : 'hover:bg-accent hover:scale-105'}`}
	onClick={() => navigate(path)}><div className='mx-auto'>{icon}</div><span className='hidden lg:block'>{text}</span></button>;
};