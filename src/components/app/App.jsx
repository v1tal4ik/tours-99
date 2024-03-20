import { useState } from 'react';

import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

const App = () => {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<div className='app-container'>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Tours theme={theme} />
			<Footer />
		</div>
	);
};

export default App;
