import { SiYourtraveldottv } from 'react-icons/si';

import './Header.scss';

const Header = ({ theme }) => {
	return (
		<header>
			<SiYourtraveldottv />

			<button className='btn secondary'>Toggle Theme:{theme === 'ligth' ? 'dark' : 'light'}</button>
		</header>
	);
};

export default Header;
