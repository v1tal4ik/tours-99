import { useState } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';

import './Header.scss';

const Header = (props) => {
	return (
		<header>
			<SiYourtraveldottv />

			<button className='btn primary' onClick={props.toggleTheme}>
				Toggle Theme
				{/* {theme} */}
			</button>
		</header>
	);
};

export default Header;
