import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {SearchContext} from '../contexts';
import React, {useContext} from 'react';
import {NavButton} from './ui/NavButton';
import {regular} from '@fortawesome/fontawesome-svg-core/import.macro';
import {useNavigate} from 'react-router-dom';

type SearchNavigationProps = {
	isLoading?: boolean;
	searchOverride?: () => void;
}

export const SearchNavigation = ({ isLoading, searchOverride }: SearchNavigationProps) => {
	const {search, setSearch} = useContext(SearchContext);
	const navigate = useNavigate();

	return <div className='container py-10 px-1 sm:px-10 2xl:px-0 w-full flex flex-col sm:flex-row items-center gap-5 justify-between'>
		<button className='text-left' onClick={() => navigate('/')}>
			<h2 className='w-fit sm:w-[15rem] bg-gradient-to-r text-transparent bg-clip-text from-primary via-secondary to-accent logo'>MovieSTAR</h2>
		</button>
		<div className='hidden sm:flex gap-3 items-center w-fit'>
			<NavButton icon={<FontAwesomeIcon icon={'magnifying-glass'}/>} text={'Discover'} path={'/'}/>
			<NavButton icon={<FontAwesomeIcon icon={regular('star')}/>} text={'Favourites'} path={'/favourites'}/>
		</div>
		<div className='flex gap-2 items-center'>
			<div className='flex max-w-[15rem] w-full relative bg-foreground rounded-full text-primary items-center px-5'>
				{isLoading ? <FontAwesomeIcon icon='spinner' spin/> : <FontAwesomeIcon icon='magnifying-glass'/>}
				<input type='text' placeholder='Just type & search...'
					className='mx-auto w-full bg-transparent placeholder:text-primary/50 py-2.5 px-5 focus:outline-none focus:ring-0'
					value={search} onChange={e => {
						setSearch(e.target.value);
						if (searchOverride) searchOverride();
					}} autoFocus/>
			</div>
			<div className='block sm:hidden'><NavButton icon={<FontAwesomeIcon icon={'star'}/>} text={'Favourites'} path={'/favourites'}/></div>
		</div>
	</div>;
};