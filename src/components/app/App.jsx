import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

const App = () => {
	const [theme, setTheme] = useState('dark');
	const [lastUpdatedDate, setLastUpdatedDate] = useState(null);

	useEffect(() => {
		// console.log('work useEffect in App', dayjs().format('HH:mm:ss MMMM,DD'));
		setLastUpdatedDate(dayjs());
	}, [theme]);

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<div className='app-container'>
			<Header theme={theme} toggleTheme={toggleTheme} lastUpdatedDate={lastUpdatedDate} />
			<Tours theme={theme} />
			<Footer />
		</div>
	);
};

export default App;
