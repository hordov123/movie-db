import React from 'react';
import {Alert} from '@mui/material';

type MessageProps = {
    message: string;
    isOpened: boolean | undefined
}

export const Message = ({isOpened, message}: MessageProps) => {

	if (isOpened) return <Alert id='message' severity="info" variant='outlined' className='w-96 duration-300'
		sx={{mb: 2, backgroundColor: '#101010', color: 'white', borderColor: '#BE185D', svg: {
			color: 'white'
		}
		}}
	>
		{message}
	</Alert>;

	return <></>;
};