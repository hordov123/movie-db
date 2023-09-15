import React from 'react';
import {useNavigate} from 'react-router-dom';
import {MainMessage, SearchNavigation} from '../../components';

const NotFound = () => {
	const navigate = useNavigate();
	return <>
		<SearchNavigation searchOverride={() => navigate('/')}/>
		<MainMessage message={'404, This page does not exist :('} showCondition={true}/>
	</>;
};

export default NotFound;