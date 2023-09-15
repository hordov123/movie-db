import React from 'react';

type MainMessageProps = {
    message: string;
    showCondition: boolean;
}
export const MainMessage = ({message, showCondition}: MainMessageProps) => {

	if (showCondition) return <h1
		className='w-fit fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary to-accent'>
		{message}
	</h1>;

	return <></>;
};