import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

const App = () => {
	// 'dark'
	const theme = 'light';

	return (
		<div className='app-container'>
			<Header theme={theme} />
			<Tours theme={theme} />
			<Footer />
		</div>
	);
};

export default App;
