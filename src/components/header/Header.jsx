import { useEffect } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';

import './Header.scss';

const Header = (props) => {
	useEffect(() => {
		// addEventListner
		// setTimeout
		// setInterval

		return () => {
			// console.log('work');
			// removeEventListener()
			// clearTimeout()
			// clearInterval()
		};
	}, []);

	return (
		<header>
			<div className='controlls'>
				<button className='btn primary' onClick={props.toggleTheme}>
					Toggle Theme {props.theme}
				</button>

				<SiYourtraveldottv />
			</div>
			{props.lastUpdatedDate && (
				<p>Last updated:{props.lastUpdatedDate.format('HH:mm:ss MMMM,DD')}</p>
			)}
		</header>
	);
};

export default Header;
